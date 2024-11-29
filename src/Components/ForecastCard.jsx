import React from 'react'

const ForecastCard = ({ weather }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div className='flex flex-col items-center justify-center  bg-[rgba(0,0,0,0.35)]'>
      {weather &&
        <div className='w-full h-full flex flex-col items-center justify-evenly py-3'>
          <h1 className='font-semibold'>{days[new Date(weather.dt_txt).getDay()]}</h1>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" className='w-1/3 object-contain' />
          <h2 className='font-medium'>{weather.weather[0].main}</h2>
          <h2 className='font-medium'>Temp : {(weather.main.temp / 10).toFixed(2)} <sup>o</sup>C</h2>
        </div>
      }
      {!weather &&
        <div className='w-full h-[145px] flex items-center justify-center animate-pulse bg-[rgba(0,0,0,0.15)] py-5 xl:h-[217px]'>
          <svg className="animate-spin h-10 w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" ></path>
          </svg>
        </div>
      }
    </div>
  )
}

export default ForecastCard