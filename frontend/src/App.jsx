import axios from "axios";
import WeatherCard from "./components/WeatherCard"
import Sidebar from "./components/Sidebar"
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const fetchCountries = () => {
    axios.get('/api/eu/countries').then(r => {
      const countries = r.data
      setCountries(countries)
    })
  }

  const changeCountry = (country) => {
    setSelectedCountry(country)
  }

  useEffect(() => {
    fetchCountries()
  }, []);

  return (
    <div className="d-flex flex-grow-1">
      <Sidebar
        title='EU Countries'
        items={countries}
        onItemClick={(e) => changeCountry(e)}
      />
      <div className="content d-flex flex-grow-1 justify-content-center align-items-center">
        <WeatherCard country={selectedCountry} />
      </div>
    </div>
  )
}

export default App