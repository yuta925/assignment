import React, { useState, useEffect } from 'react';
import axios from 'axios';

type NewsItem = {
  title: string;
  url: string;
  imageUrl: string;
};

const TopicsNews: React.FC<{ keyword: string }> = ({ keyword }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const API_KEY = '6e7f026cad4c4a3f86195d765d535f73'; 

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: keyword,
            pageSize: 5,
            language: 'jp',
            apiKey: API_KEY,
          },
        });

        setNews(response.data.articles.map((article: any) => ({
          title: article.title,
          url: article.url,
          imageUrl: article.urlToImage,
        })));
      } catch (error) {
        console.error("Error fetching the news:", error);
      }
    })();
  }, [keyword]);

  return (
    <div className='border rounded-lg'>
      <h1 className='text-white mx-4 mt-2 border-b'>PickUp</h1>
      {news.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="block mb-0.5">
          <button className="flex items-center space-x-2 mt-2 bg-black text-white text-xs p-2 rounded">
            <img src={item.imageUrl} alt="Article Thumbnail" className="w-12 h-8 my-2 object-cover rounded" />
            <span>{item.title}</span>
          </button>
        </a>
      ))}
    </div>
  );
};

export default TopicsNews;