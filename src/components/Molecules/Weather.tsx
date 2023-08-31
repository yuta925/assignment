import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    icon: string;
  }[];
}

const TokyoWeather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            q: 'Tokyo',
            appid: '38f549c3a8256d3d9b6cbf102ae12217',  
            units: 'metric', 
          }
        });
        setWeatherData(response.data.list);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    })(); 
  }, []);


  
  return (
    <div className='text-white bg-black rounded-lg border'>
      {weatherData && (
        <div>
          <h1 className='mx-4 mt-2 border-b'>Tokyo</h1>
          <div className='flex justify-between'>
            <h2 className='text-xl ml-2 mt-2'>{Math.round(weatherData[0].main.temp)}°C</h2>
            <img src={`http://openweathermap.org/img/w/${weatherData[0].weather[0].icon}.png`} alt="Weather icon" />
          </div>
          <ul className="flex">
            {weatherData.slice(0, 5).map(day => (
            <li key={day.dt} className="flex items-center space-x-1 mx-2">
              <div className='flex flex-col mx-2 mb-2'>
                <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="Weather icon" className=''/>
                <span className=' text-xs'>{Math.round(day.main.temp_max)}°C</span>
                <span className=' text-xs'>{Math.round(day.main.temp_min)}°C</span>
              </div>
            </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TokyoWeather;
