import React, { useEffect } from "react";
import { CurrentCityContext } from "../context";
import useFetch from "../hooks/useFetch";
import CurrentLocation from "./CurrentLocation";
import Header from "./Header";
import WeatherDetails from "./WeatherDetails";

interface Props {
  saveLocation: () => void;
}

const Dashboard = ({ saveLocation }: Props) => {
  //fetch one location
  //default to San Jose, CA
  //onClick rerender with new location if any
  const {
    state: { loading, data, error },
    refetch,
  } = useFetch(
    process.env.REACT_APP_API_ENDPOINT,
    process.env.REACT_APP_API_KEY,
    "TEST"
  );

  useEffect(() => {
    refetch();
  }, []);

  console.log(loading, data, error);
  return (
    <CurrentCityContext.Provider value={data}>
      <div className="dashboard">
        <Header saveLocation={saveLocation} />
        {data && (
          <>
            <CurrentLocation data={data} />
            <WeatherDetails />
          </>
        )}
      </div>
    </CurrentCityContext.Provider>
  );
};

export default Dashboard;
