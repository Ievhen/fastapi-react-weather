# 🌦️ Weather
[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)

Simple Full-Stack application to showing weather accross EU countries.
The https://open-meteo.com API is used.

## 🛠️ Technologies Used

- Backend: FastAPI
- Frontend: React, Bootstrap
- Docker / Docker Compose

## 🖥️ Running the Application

### Modes of Running
You can run the application in **three different ways**:

1. [Locally from CLI](#1-running-from-cli-🐍⚛️)
2. [Using Docker (separate backend/frontend)](#2-running-with-docker-🐳)
3. [Using Docker Compose (full stack)](#3-running-with-docker-compose-🐙)

### 1. Running from CLI 🐍⚛️

#### Backend
```bash
cd backend
python -m venv .venv
pip install -r requirements.txt
source .venv/bin/activate
uvicorn src.main:app --reload
```
Access the OpenAPI documentation at http://localhost:8000/docs

#### Frontend
```bash
cd frontend
npm run dev
```
Access the UI at http://localhost:5173/

### 2. Running with Docker 🐳

#### Backend
```bash
cd backend
docker build -t weather-backend:latest .
docker run -p 8000:8000 weather-backend:latest
```
Access the OpenAPI documentation at http://localhost:8000/docs

#### Frontend
```bash
cd frontend
docker build -t weather-frontend:latest .
docker run -p 5173:80 weather-frontend:latest
```
Access the UI at http://localhost:5173/

### 3. Running with Docker Compose 🐙

```bash
docker compose run -d
```
Access the UI at http://localhost/ \
Access the OpenAPI documentation at http://localhost/docs