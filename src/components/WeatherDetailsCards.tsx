import React, { useContext, useEffect } from "react";
import { CurrentCityContext } from "../context";
import Card from "./Card";
import { FiWind } from "react-icons/fi";

const WeatherDetailsCards = () => {
  const data = useContext(CurrentCityContext);

  const { current } = data;

  return (
    <div className="weather-details-cards">
      <Card
        className="dashboard-card"
        icon={<FiWind size={40} />}
        title="Wind Speed"
        value={`${current.wind_mph.toString()}/mph`}
      />
      <Card
        className="dashboard-card"
        icon={<FiWind size={40} />}
        title="Feels Like"
        value={`${current.feelslike_f.toString()}°`}
      />
      <Card
        className="dashboard-card"
        icon={<FiWind size={40} />}
        title="Humidity"
        value={`${current.humidity.toString()}%`}
      />
      <Card
        className="dashboard-card"
        icon={<FiWind size={40} />}
        title="UV Index"
        value={current.uv.toString()}
      />
    </div>
  );
};

export default WeatherDetailsCards;
