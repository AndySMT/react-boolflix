import { createContext, useContext, useState, useEffect } from "react";
import axios, { Axios } from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const moviePath = "search/movie";
const tvPath = "search/tv";
const flagsUrl = import.meta.env.VITE_FLAGAPI_URL;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [tv, setTv] = useState([]);
  const [flag, setFlag] = useState({});

  useEffect(() => {
    const searchQuery = query.trim() || "smurfs";
    console.log(searchQuery);
    axios
      .get(apiUrl + moviePath, {
        params: {
          api_key: apiKey,
          query: searchQuery,
        },
      })
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((error) => {
        console.error("Errore durante la richiesta:", error);
      });
    axios
      .get(`${apiUrl}${tvPath}`, {
        params: {
          api_key: apiKey,
          query: searchQuery,
        },
      })
      .then((resp) => {
        setTv(resp.data.results);
      })
      .catch((error) => {
        console.error("Errore durante la richiesta delle serie TV:", error);
      });
    axios
      .get(flagsUrl)
      .then((resp) => {
        const flagsData = {};
        resp.data.forEach((country) => {
          flagsData[country.cca2.toLowerCase()] = country.flags.png;
        });
        setFlag(flagsData);
      })
      .catch((error) => {
        console.error("Errore durante la richiesta per le bandiere:", error);
      })
      .finally(() => {
        console.log("Chiamata bandiera effettuata");
      });
  }, [query]);

  const data = {
    movies,
    setQuery,
    tv,
    flag,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
