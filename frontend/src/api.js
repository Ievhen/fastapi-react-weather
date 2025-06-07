import axios from "axios";

export const fetchCountries = async () => {
    const { data } = await axios.get('/api/eu/countries');
    return data;
}

export const fetchWeather = async (alpha_code) => {
    const { data } = await axios.get(`/api/eu/countries/${alpha_code}/weather`);
    return data;
}