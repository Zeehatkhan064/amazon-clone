import axios from "axios";

const instance = axios.create({
  baseURL: "https://asos2.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    "X-RapidAPI-Key": "156fc1cbb7msh6a09f6c30732e6fp18eb6fjsnc25b04a66295",
  },
});

export default instance;
