import axios from "axios";

export const getStarWarsPeople = async () => {
  const URL = "https://swapi.dev/api/people/1"
  return axios.get(URL);
};