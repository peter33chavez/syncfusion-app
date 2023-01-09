import { createContext } from "react";
import {WeatherData} from "./interfaces"

//single city
export const CurrentCityContext = createContext({} as WeatherData);

//allSavedCities
export const SavedCityContext = createContext([] as Object[]);
