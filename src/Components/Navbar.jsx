import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ setCity, setCoords, setCurrentWeather, setForecaseWeather }) => {
  const searchRef = useRef(null)
  const [searchbar, setSearchbar] = useState(true)
  const [location, setLocation] = useState({ city: '', lat: null, long: null })

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && document.activeElement === searchRef.current) {
        return;
      }
      if (isMobile) {
        setSearchbar(false);
      } else {
        setSearchbar(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentLocation = () => {
    setCurrentWeather(null)
    setForecaseWeather(null)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCoords({ lat: latitude, long: longitude })
      }, (error) => {
        console.error("Error fetching location:", error);
        alert(error.message)
        setLocation({ lat: "Error", long: "Error" });
      });
    }
    else {
      console.log('Geolocation not Supported');
    }
  }

  useEffect(() => {
    if (searchbar && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchbar])


  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentWeather(null)
    setForecaseWeather(null)
    setSearchbar(false)
    setLocation({ city: '', lat: null, long: null })
    setCoords({ lat: null, long: null })
    setCity(location.city)
  }

  return (
    <div className='w-full h-[8vh] flex items-center justify-between pl-2 sticky top-0 backdrop-blur-sm  z-50 *:h-3/4 xl:pl-5'>
      <span id="logo" className='flex items-center'>
        <img src="/logo.png" alt="" className='object-contain h-4/5' />
      </span>
      <div id="search" className={`${(!searchbar) ? 'w-[28%] md:w-[15%]' : 'w-5/6 md:w-3/5 lg:w-2/4'} flex items-center justify-evenly *:h-3/4 xl:justify-center xl:gap-x-5`}>
        {searchbar &&
          <form className='w-[65%] md:w-[73%]' onSubmit={handleSubmit}>
            <input ref={searchRef} type="search" name="" id="" className={`w-full h-full border-2 px-1 text-sm rounded-md xl:px-3 xl:text-base`} onChange={(e) => setLocation({ city: e.target.value, lat: null, long: null })} value={location.city} placeholder='Enter City Name' />
          </form>
        }
        <button className="px-2.5 flex items-center justify-center border-2 rounded-md lg:hidden" onClick={() => (window.innerWidth <= 768 ? setSearchbar(!searchbar) : '')}><i className="fa-solid fa-magnifying-glass fa-sm"></i></button>
        <button className="px-2.5 flex items-center justify-center border-2 rounded-md bg-black" onClick={currentLocation}><i className="fa-solid fa-location-dot fa-sm text-white"></i></button>
      </div>
    </div>
  )
}

export default Navbar
