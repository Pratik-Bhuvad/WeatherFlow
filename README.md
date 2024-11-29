# Weather App

A simple and interactive weather forecasting web application built with React. The app fetches real-time weather data using the OpenWeatherMap API and displays the current weather along with a 5-day forecast. The app also includes a dynamic line graph to visualize the weather data.

## Features
- Displays current weather for a city or by using latitude and longitude.
- Shows a 5-day weather forecast at noon (12:00 PM) for the selected city.
- Interactive line graph showing temperature trends for the next 4 days.

## Technologies Used
- React
- OpenWeatherMap API
- TailwindCSS (for styling)
- fetch for API calls

## Components

### 1. `App.js`
The main entry point of the app that coordinates the state management and fetches weather data using `fetch` API. It renders the `Navbar`, `WeatherCard`, `ForecastCard`, and `LineGraph` components.

### 2. `Navbar.js`
A component for the navigation bar. It allows users to input a city name or use geolocation to fetch weather data based on their coordinates. This component also contains functionality to handle city and coordinate changes.

### 3. `WeatherCard.js`
Displays the current weather details including:
- Temperature (Current, Min, Max, Feels Like)
- Humidity, Pressure, and Wind Speed
- Weather icon and description
- City and Country Name

### 4. `ForecastCard.js`
Displays a card for each day in the 5-day forecast, showing:
- Date
- Weather icon
- Temperature forecast (high and low)

### 5. `LineGraph.js`
A component that renders a line graph using the temperature data from the forecast. This graph visualizes the temperature change over the upcoming days.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- A code editor like VS Code

### Steps to run the app locally

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install dependencies:**
    npm install
3. **Create a .env file for your OpenWeatherMap API key:**
    VITE_Weather_API=your_openweathermap_api_key
    You can get your API key by signing up at OpenWeatherMap.
4. **Run the app:**
    npm run dev
    Open your browser and navigate to http://localhost:3000 (or the provided URL) to view the app.


### Customization Options:
- You can change the background images to reflect different weather conditions.
- You can integrate additional data from the OpenWeatherMap API like hourly forecasts or air quality information.
- You can extend the `LineGraph` component to visualize different weather parameters like humidity, wind speed, etc.
