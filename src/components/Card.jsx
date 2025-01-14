export default function Card({ data }) {
  const posterUrl = data?.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "https://via.placeholder.com/150";

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={posterUrl}
        className="card-img-top"
        alt={data?.originatal_title || "No title"}
      />
      <div className="card-body">
        <h5 className="card-title">{data?.title || "Nessun titlo"}</h5>
        <p className="card-text">{data?.overview || "Non vaaaaaaaaaa"}</p>
      </div>
    </div>
  );
}
