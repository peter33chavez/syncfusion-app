import React from "react";
import ForecastDetails from "./ForecastDetails";
import WeatherDetailsCards from "./WeatherDetailsCards";

const WeatherDetails = () => {
  return (
    <div className="weather-details px-10 py-5">
      <WeatherDetailsCards />
      <ForecastDetails />
    </div>
  );
};

export default WeatherDetails;
