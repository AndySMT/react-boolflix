/* import Card from "./Card";
import { useGlobalContext } from "../context/GlobalContext";

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
} */
import { useGlobalContext } from "../context/GlobalContext";
import MySwiper from "./MySwiper";

export default function Cards() {
  const { movies, tv } = useGlobalContext();
  console.log("Chiamata effettuata movies", movies);
  console.log("Chiamata effettuata tv", tv);

  return (
    <>
      <h1>Film</h1>
      <MySwiper data={movies} />
      <h1>Series</h1>
      <MySwiper data={tv} />
    </>
  );
}
