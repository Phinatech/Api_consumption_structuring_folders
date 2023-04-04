import axios from "axios";
import { create } from "domain";

const instance = axios.create({
  //   method: "GET",
  baseURL: "https://mashape-community-urban-dictionary.p.rapidapi.com",
  //   params: { term: "wat" },
  headers: {
    "X-RapidAPI-Key": "139f99ccbfmsh8a76064f3a45b45p1e26acjsn33229cd19be6",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
});

export default instance;
