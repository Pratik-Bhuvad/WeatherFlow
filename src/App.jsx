import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import WeatherCard from './Components/WeatherCard'
import ForecastCard from './Components/ForecastCard'
import './App.css'
import LineGraph from './Components/LineGraph'

function App() {
  const [city, setCity] = useState('Mumbai')
  const [coords, setCoords] = useState({ lat: null, long: null })
  const [currentWeather, setCurrentWeather] = useState()
  const [forecastWeather, setForecaseWeather] = useState()
  const API = import.meta.env.VITE_Weather_API

  const getWeather = async () => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?${(coords.lat && coords.long) ? `lat=${coords.lat}&lon=${coords.long}` : `q=${city}`}&appid=${API}`)
    const currentWeather = await result.json()

    const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?exclude=minutely,hourly&${(coords.lat && coords.long) ? `lat=${coords.lat}&lon=${coords.long}` : `q=${city}`}&appid=${API}`)
    const forecastResult = await forecast.json()

    if (currentWeather.cod == 200) {
      setCurrentWeather(currentWeather)
      setForecaseWeather(forecastResult.list.slice(5).filter(weather => weather.dt_txt.split(' ')[1] === '12:00:00'))
    }
    else {
      alert('Oops! Couldn’t find the city. Please check the name and try again.')
      setCity('Mumbai')
    }
  }

  useEffect(() => {
    getWeather()
  }, [city, coords])


  return (
    <div className='w-[calc(100vw - 10px)] h-auto box-border bg-[url("https://i.pinimg.com/564x/57/93/3e/57933e9ef05281822ad715a6803e860d.jpg")] bg-center bg-cover bg-no-repeat xl:h-screen' style={{ scrollbarGutter: 'stable' }}>
      <Navbar setCity={setCity} setCoords={setCoords} setCurrentWeather={setCurrentWeather} setForecaseWeather={setForecaseWeather} />
      <div id="mainCard" className='w-full pb-8'>
        <WeatherCard currentWeather={currentWeather} />
      </div>
      <div className='w-full h-auto flex flex-col xl:h-[41.5vh]'>
        <div className='h-full'>
          <h1 className='text-2xl font-bold text-center leading-5'>Forecast <br /><span className='text-sm font-medium'>{currentWeather ? currentWeather.name : 'City ...'}</span></h1>
          <div className='flex flex-col md:flex-row md:*:w-1/2 md:gap-x-3 xl:h-5/6 md:items-center '>
            <div className='grid grid-cols-2 gap-3 gap-y-5 mt-5 pb-5 px-2  *:rounded-md xs:px-5 xs:gap-x-5 lg:*:w-4/5 lg:justify-items-center xl:!w-3/5 xl:h-3/4 xl:grid-cols-4 xl:*:w-full'>
              {(forecastWeather) ?
                (forecastWeather.map((weather, index) => (
                  <ForecastCard key={index} weather={weather} />
                ))) : (
                  Array.from({ length: 4 }, (_, index) => (
                    <ForecastCard key={index} />
                  ))
                )
              }
            </div>
            <div className='flex h-[43vh] pb-3 items-center justify-center md:h-[35vh]'>
              <LineGraph weather={forecastWeather} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
