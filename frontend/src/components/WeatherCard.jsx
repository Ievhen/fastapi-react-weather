import React from "react";
import WeatherIcon from "./WeatherIcon"

class WeatherCard extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <div className="card">
                    <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Weather</span>
                        <WeatherIcon wheatherCode={data.weather.current_weather.weathercode} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{data.country.capital}, {data.country.name}</h5>
                        <p className="card-text">Temperature: {data.weather.current_weather.temperature}°C</p>
                    </div>
                </div>
            </>
        )
    }
}

export default WeatherCard