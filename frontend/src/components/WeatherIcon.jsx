function WeatherIcon({wheatherCode}) {
    const codeToIcon = {
        0: 'wi-day-sunny',
        1: 'wi-day-cloudy',
        2: 'wi-cloud',
        3: 'wi-cloudy',
        45: 'wi-fog',
        48: 'wi-fog',
        51: 'wi-sprinkle',
        53: 'wi-sprinkle',
        55: 'wi-showers',
        56: 'wi-rain-mix',
        57: 'wi-rain-mix',
        61: 'wi-rain',
        63: 'wi-rain',
        65: 'wi-rain',
        66: 'wi-rain-mix',
        67: 'wi-rain-mix',
        71: 'wi-snow',
        73: 'wi-snow',
        75: 'wi-snow',
        77: 'wi-snowflake-cold',
        80: 'wi-showers',
        81: 'wi-showers',
        82: 'wi-rain-wind',
        85: 'wi-snow-wind',
        86: 'wi-snow-wind',
        95: 'wi-thunderstorm',
        96: 'wi-storm-showers',
        99: 'wi-thunderstorm',
    };

    const iconClass = codeToIcon[wheatherCode] || "wi-na"; // wi-na doesn't work

    return (
        <i className={`wi ${iconClass}`}></i>
    );
}

export default WeatherIcon;