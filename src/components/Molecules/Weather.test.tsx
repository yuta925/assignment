import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import TokyoWeather from './Weather';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new AxiosMockAdapter(axios);

const mockData = {
  list: [
    {
      dt: 12345,
      main: {
        temp: 20.5,
        temp_min: 19,
        temp_max: 23,
      },
      weather: [
        {
          icon: "test-icon",
        },
      ],
    },
  ],
};

describe('TokyoWeather component', () => {
    beforeEach(() => {
        mock.reset();
    });

    it('東京の天気情報を取得', async () => {
        mock.onGet('https://api.openweathermap.org/data/2.5/forecast').reply(200, mockData);
        
        render(<TokyoWeather />);
        
        await waitFor(() => expect(screen.getByText('Tokyo')).toBeInTheDocument());
        
        expect(screen.getByText('21°C')).toBeInTheDocument();
    });
});

