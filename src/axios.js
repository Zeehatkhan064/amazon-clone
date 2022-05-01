import axios from "axios";

const instance = axios.create({
  baseURL: "https://asos2.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    "X-RapidAPI-Key": "63c0f1bb91msh5535e20528936f0p157a43jsn6cff2da7674c",
  },
});

export default instance;
