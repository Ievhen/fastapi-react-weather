from aiohttp import ClientSession


class HTTPClient:
    def __init__(self, base_url):
        self._session = ClientSession(
            base_url=base_url
        )


class OpenMeteoHTTPClient(HTTPClient):
    async def get_current_weather(self, latitude:float, longitude:float):
        """ GET /v1/forecast """

        params = {
            'latitude': latitude,
            'longitude': longitude,
            'current_weather': 'True',
        }
        async with self._session.get("/v1/forecast", params=params) as response:
            result = await response.json()
            return result
