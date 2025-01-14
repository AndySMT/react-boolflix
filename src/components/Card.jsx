export default function Card({ data }) {
  const posterUrl = data?.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "https://via.placeholder.com/150";
  const mediaType = data?.title ? "movie" : "tv"; // Differenziamo film e serie TV

  const flags = (language) => {
    if (["it", "ita"].includes(language)) return "🟩";
    if (["en", "eng"].includes(language)) return "🟦";
    if (["fr", "fra"].includes(language)) return "🟥";
    if (["de", "ger"].includes(language)) return "🟨";
    return "🌐";
  };
  const star = () => {
    return "⭐".repeat(Math.floor(data.vote_average));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={posterUrl}
        className="card-img-top"
        alt={data?.originatal_title || "No title"}
      />
      <div className="card-body">
        <h5 className="card-title">{data?.title || "Nessun titlo"}</h5>
        {/* <p className="text-danger">{data.title}</p> */}
        <p className="">{data?.originatal_title || "Nada"}</p>
        <p className="">
          Language: {data.original_language}
          {flags(data.original_language)}
        </p>
        <p className="">
          Voto: {data.vote_average}
          {star()}
        </p>
        {/* <p className="card-text">{data?.overview || "Non vaaaaaaaaaa"}</p> */}
      </div>
    </div>
  );
}
