import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import TopicsNews from './Topics';

describe('TopicsNewsコンポーネントのテスト', () => {
  const mock = new AxiosMockAdapter(axios);
  const mockData = {
    articles: [
      {
        title: 'Test Article 1',
        url: 'https://test.url/1',
        urlToImage: 'https://test.url/img1.jpg',
      },
      {
        title: 'Test Article 2',
        url: 'https://test.url/2',
        urlToImage: 'https://test.url/img2.jpg',
      },
    ],
  };

  afterEach(() => {
    mock.reset();
  });

  it('rキーワードをAIに設定した場合', async () => {
    mock.onGet('https://newsapi.org/v2/everything').reply(200, mockData);

    render(<TopicsNews keyword="AI" />);

    await waitFor(() => {
      expect(screen.getByText('PickUp')).toBeInTheDocument();
      expect(screen.getByText('Test Article 1')).toBeInTheDocument();
      expect(screen.getByText('Test Article 2')).toBeInTheDocument();
    });
  });

  it('エラーの適切な処理', async () => {
    mock.onGet('https://newsapi.org/v2/everything').reply(500);

    console.error = jest.fn();  

    render(<TopicsNews keyword="test" />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching the news:', expect.any(Error));
    });
  });
});
