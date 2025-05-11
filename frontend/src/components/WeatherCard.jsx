import React from "react";

class WeatherCard extends React.Component {
    render() {
        const { country } = this.props;
        if (!country) {
            return <div>Select a country to show the weather</div>;
        }
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        Weather
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{country.capital}, {country.name}</h5>
                        <p className="card-text">Temperature: 0°C (Not implemented)</p>
                    </div>
                </div>
            </>
        )
    }
}

export default WeatherCard