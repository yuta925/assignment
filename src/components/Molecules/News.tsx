import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '@/Article';


export type Category = 'general' | 'business' | 'technology' | 'entertainment' | 'sports';

const FetchNews: React.FC<{ category: Category }> = ({ category }) => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category,
            country: 'jp',
            apiKey: '6e7f026cad4c4a3f86195d765d535f73', 
            pageSize: 10
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    })(); 
  }, [category]);
  
  return (
    <div>
      <h2 className='text-white font-bold'>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      <ul className='h-full'>
        {articles && articles.map((article, index) => (
          <li key={index} >
            <ArticleButton article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ArticleButton: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-md border my-4 bg-black">
      <img src={article.urlToImage} alt={article.title} className="w-12 h-12 object-cover mr-4" />
      <div className="flex flex-col">
        <h4 className="text-xs text-white">{article.title}</h4>
      </div> 
    </a>
  );
};


export default FetchNews;
