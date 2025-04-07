eu_countries = [
    {"alpha_code": "AT", "name": "Austria", "timezone": "Europe/Vienna", "capital": "Vienna", "latitude": 48.2082, "longitude": 16.3738},
    {"alpha_code": "BE", "name": "Belgium", "timezone": "Europe/Brussels", "capital": "Brussels", "latitude": 50.8503, "longitude": 4.3517},
    {"alpha_code": "BG", "name": "Bulgaria", "timezone": "Europe/Sofia", "capital": "Sofia", "latitude": 42.6977, "longitude": 23.3219},
    {"alpha_code": "HR", "name": "Croatia", "timezone": "Europe/Zagreb", "capital": "Zagreb", "latitude": 45.8131, "longitude": 15.978},
    {"alpha_code": "CY", "name": "Cyprus", "timezone": "Asia/Nicosia", "capital": "Nicosia", "latitude": 35.1856, "longitude": 33.3823},
    {"alpha_code": "CZ", "name": "Czech Republic", "timezone": "Europe/Prague", "capital": "Prague", "latitude": 50.0755, "longitude": 14.4378},
    {"alpha_code": "DK", "name": "Denmark", "timezone": "Europe/Copenhagen", "capital": "Copenhagen", "latitude": 55.6761, "longitude": 12.5683},
    {"alpha_code": "EE", "name": "Estonia", "timezone": "Europe/Tallinn", "capital": "Tallinn", "latitude": 59.437, "longitude": 24.7535},
    {"alpha_code": "FI", "name": "Finland", "timezone": "Europe/Helsinki", "capital": "Helsinki", "latitude": 60.1699, "longitude": 24.9384},
    {"alpha_code": "FR", "name": "France", "timezone": "Europe/Paris", "capital": "Paris", "latitude": 48.8566, "longitude": 2.3522},
    {"alpha_code": "DE", "name": "Germany", "timezone": "Europe/Berlin", "capital": "Berlin", "latitude": 52.52, "longitude": 13.405},
    {"alpha_code": "GR", "name": "Greece", "timezone": "Europe/Athens", "capital": "Athens", "latitude": 37.9838, "longitude": 23.7275},
    {"alpha_code": "HU", "name": "Hungary", "timezone": "Europe/Budapest", "capital": "Budapest", "latitude": 47.4979, "longitude": 19.0402},
    {"alpha_code": "IE", "name": "Ireland", "timezone": "Europe/Dublin", "capital": "Dublin", "latitude": 53.3498, "longitude": -6.2603},
    {"alpha_code": "IT", "name": "Italy", "timezone": "Europe/Rome", "capital": "Rome", "latitude": 41.9028, "longitude": 12.4964},
    {"alpha_code": "LV", "name": "Latvia", "timezone": "Europe/Riga", "capital": "Riga", "latitude": 56.946, "longitude": 24.1059},
    {"alpha_code": "LT", "name": "Lithuania", "timezone": "Europe/Vilnius", "capital": "Vilnius", "latitude": 54.6892, "longitude": 25.2798},
    {"alpha_code": "LU", "name": "Luxembourg", "timezone": "Europe/Luxembourg", "capital": "Luxembourg City", "latitude": 49.6117, "longitude": 6.13},
    {"alpha_code": "MT", "name": "Malta", "timezone": "Europe/Malta", "capital": "Valletta", "latitude": 35.8997, "longitude": 14.5147},
    {"alpha_code": "NL", "name": "Netherlands", "timezone": "Europe/Amsterdam", "capital": "Amsterdam", "latitude": 52.3676, "longitude": 4.9041},
    {"alpha_code": "PL", "name": "Poland", "timezone": "Europe/Warsaw", "capital": "Warsaw", "latitude": 52.2298, "longitude": 21.0118},
    {"alpha_code": "PT", "name": "Portugal", "timezone": "Europe/Lisbon", "capital": "Lisbon", "latitude": 38.7169, "longitude": -9.1395},
    {"alpha_code": "RO", "name": "Romania", "timezone": "Europe/Bucharest", "capital": "Bucharest", "latitude": 44.4268, "longitude": 26.1025},
    {"alpha_code": "SK", "name": "Slovakia", "timezone": "Europe/Bratislava", "capital": "Bratislava", "latitude": 48.1482, "longitude": 17.1067},
    {"alpha_code": "SI", "name": "Slovenia", "timezone": "Europe/Ljubljana", "capital": "Ljubljana", "latitude": 46.0511, "longitude": 14.5051},
    {"alpha_code": "ES", "name": "Spain", "timezone": "Europe/Madrid", "capital": "Madrid", "latitude": 40.4168, "longitude": -3.7038},
    {"alpha_code": "SE", "name": "Sweden", "timezone": "Europe/Stockholm", "capital": "Stockholm", "latitude": 59.3293, "longitude": 18.0686}
]


def find_country(alpha_code: str):
    return next(
        country for country in eu_countries 
            if country['alpha_code'] == alpha_code.upper()
    )
