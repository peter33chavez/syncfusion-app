import { createContext, useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import { CurrentCityContext, SavedCityContext } from "./context";
import useFetch from "./hooks/useFetch";

//weather dashboard
//api weatherapi.com

interface newSave {
  condition: string;
  conditionIcon: string;
  city: string;
  lastUpdated: string;
  temp: number;
}

function App() {
  const [savedCities, setSavedCities] = useState<any>([]);

  const saveLocation = () => {
    console.log("add");
  };
  return (
    <div className="App">
      <SavedCityContext.Provider value={savedCities}>
        <Dashboard saveLocation={saveLocation} />

        <SideBar />
      </SavedCityContext.Provider>
    </div>
  );
}

export default App;
