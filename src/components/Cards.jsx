import Card from "./Card";
import { useGlobalContext } from "../context/GlobalContext";

/* const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY; */

/* export default function Cards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          query: "bmw",
        },
      })
      .then((resp) => {
        setMovies(resp.data.results);
        console.log(resp.data.results);
      })
      .catch((error) => {
        console.log("Errore chiamata api", error);
      })
      .finally(() => {
        console.log("Chiamata effettuata");
      });
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movies) => (
          <Card key={movies.id} data={movies} />
        ))}
      </div>
    </>
  );
}
 */

export default function Cards() {
  const { movies, tv } = useGlobalContext();
  console.log("Chiamata effettuata movies", movies);
  console.log("Chiamata effettuata tv", tv);

  return (
    <>
      <h1>film</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movies) => (
          <Card key={movies.id} data={movies} />
        ))}
      </div>
      <h1>series</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {tv.map((serie) => (
          <Card key={serie.id} data={serie} />
        ))}
      </div>
    </>
  );
}
