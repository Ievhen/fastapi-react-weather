from fastapi import APIRouter
from src.eu_countries import eu_countries, find_country
from src.init import meteo_clinet


router = APIRouter(
    prefix="/eu"
)


@router.get("/countries")
async def get_eu_countries():
    return eu_countries


@router.get("/countries/{alpha_code}")
async def get_eu_country(alpha_code: str):
    return find_country(alpha_code)


@router.get("/countries/{alpha_code}/weather")
async def get_eu_country_weather(alpha_code: str):
    country = find_country(alpha_code)
    weather = await meteo_clinet.get_current_weather(
        latitude=country['latitude'], 
        longitude=country['longitude']
    )
    return weather
