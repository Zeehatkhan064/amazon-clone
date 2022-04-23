import axios from "axios";

const instance = axios.create({
  baseURL: "https://asos2.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    "X-RapidAPI-Key": "098528a8f2msh4c7a737b90830d5p154e8bjsn44808f4120ec",
  },
});

export default instance;
