import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import FetchNews from './FetchNews';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new AxiosMockAdapter(axios);

const mockData = {
  articles: [
    {
      title: "Test Article",
      url: "https://example.com",
      urlToImage: "https://example.com/image.jpg",
    },
  ],
};

describe('FetchNewsコンポーネントのテスト', () => {
    beforeEach(() => {
        mock.reset();
    });

    it('fetches and displays news articles', async () => {
        mock.onGet('https://newsapi.org/v2/top-headlines').reply(200, mockData);
        
        render(<FetchNews category="general" />);
        
        await waitFor(() => expect(screen.getByText('Test Article')).toBeInTheDocument());
        
        expect(screen.getByAltText('Test Article')).toHaveAttribute('src', 'https://example.com/image.jpg');
    });

} )
