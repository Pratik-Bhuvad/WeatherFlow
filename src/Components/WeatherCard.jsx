import React from 'react'

const WeatherCard = ({ currentWeather }) => {

    return (
        <div className='w-11/12 min-h-[45vh] h-auto mx-auto rounded-xl flex flex-col items-center justify-center gap-y-7 mt-3 backdrop-blur-[4px] bg-[rgba(255,255,255,0.3)] xs:w-10/12 md:flex-row lg:justify-between xl:w-8/12'>
            {currentWeather && <>
                <div id="weather" className='w-4/5 flex flex-col items-center justify-center gap-y-2 pb-2 border-b-2 md:border-b-0 md:border-r-2 md:w-3/4 md:mr-3 md:gap-y-0 md:h-2/4 lg:mr-16'>
                    <span className='flex h-2/5 w-auto items-center justify-between font-bold text-3xl font-mono'>
                        <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="" className='object-contain' /> {currentWeather.weather[0].main}</span>
                    <span className='text-3xl font-semibold'>{(currentWeather.main.temp / 10).toFixed(2)} <sup>o</sup>C </span>
                </div>
                <div id="otherDetails" className='w-[95%] grid grid-cols-2 gap-y-5 gap-3.5 justify-items-stretch *:font-medium xs:px-2 lg:w-10/12 lg:text-xl lg:gap-x-0'>
                    <span>MinTemp: {(currentWeather.main.temp_min / 10).toFixed(1)} <sup>o</sup>C</span>
                    <span>MaxTemp: {(currentWeather.main.temp_max / 10).toFixed(1)} <sup>o</sup>C</span>
                    <span>Feels Like: {(currentWeather.main.feels_like / 10).toFixed(1)} <sup>o</sup>C</span>
                    <span>Humidity: {currentWeather.main.humidity}%</span>
                    <span>Pressure: {currentWeather.main.pressure} hPa</span>
                    <span>Wind Speed: {currentWeather.wind.speed} m/s (from {currentWeather.wind.deg}°)</span>
                </div>
                <div id="city" className='w-full flex items-center justify-center mx-auto *:font-semibold text-slate-800 pb-2 md:absolute md:bottom-0 xl:py-3'>
                    <span>{currentWeather.name}, &nbsp;</span>
                    <span>{currentWeather.sys.country}</span>
                </div>
            </>}
            {!currentWeather && <div className="w-full min-h-[45vh] h-full flex items-center justify-center animate-pulse rounded-xl *:rounded-xl">
                <div className='w-full min-h-[45vh] h-full flex flex-col items-center justify-center text-xl font-bold bg-[rgba(255,255,255,0.6)]'>
                    <svg className="animate-spin h-10 w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" ></path>
                    </svg>
                    Fetching Weather ...
                </div>
            </div>}
        </div>
    )
}

export default WeatherCard
