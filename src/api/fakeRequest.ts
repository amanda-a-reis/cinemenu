import axios from "axios";

export const getStarWarsPeople = async () => {
  const URL = import.meta.env.VITE_SWAPI_URL || ""
  return axios.get(URL);
};