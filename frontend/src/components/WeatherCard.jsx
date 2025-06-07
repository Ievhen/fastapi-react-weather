import React from "react";

class WeatherCard extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Weather
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