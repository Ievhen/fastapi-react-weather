import WeatherCard from "./components/WeatherCard"
import Sidebar from "./components/Sidebar"
import { useEffect, useState, useCallback } from "react";
import { fetchCountries, fetchWeather } from "./api"

function App() {
  const [countries, setCountries] = useState([]);
  const [weatherCardData, setWeatherCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeCountry = useCallback(async (country) => {
    setIsLoading(true)
    try {
      const weather = await fetchWeather(country.alpha_code);
      setWeatherCardData({country, weather});
    } finally {
      setIsLoading(false)
    }
  }, []);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    }

    loadCountries()
  }, []);

  return (
    <div className="d-flex flex-grow-1">
      <Sidebar
        title='EU Countries'
        items={countries}
        onItemClick={changeCountry}
      />
      <div className="content d-flex flex-grow-1 justify-content-center align-items-center">
        {!isLoading && weatherCardData && <WeatherCard data={weatherCardData}/>}
        {!isLoading && !weatherCardData && <div>Select a country to show the weather</div>}
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  )
}

export default App