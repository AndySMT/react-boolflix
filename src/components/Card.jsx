import { useGlobalContext } from "../context/GlobalContext";

export default function Card({ data }) {
  const posterUrl = data?.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "https://via.placeholder.com/150";

  /*   const flags = (language) => {
    if ("it".includes(language)) return "🟩";
    if ("en".includes(language)) return "🟦";
    if ("fr".includes(language)) return "🟥";
    if ("de".includes(language)) return "🟨";
    return "🌐";
  }; */
  const { flag } = useGlobalContext();
  const flags = (language) => {
    if (flag[language]) {
      return <img id="flag" src={flag[language]} alt={language} />;
    }
    return "🌐";
  };

  const star = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      const star = i <= Math.ceil(data.vote_average / 2) ? "★" : "☆";
      stars.push(star);
    }
    if (stars.length > 0) {
      return stars.join("");
    }
  };

  /* const star = () => {
    return "⭐".repeat(Math.floor(data.vote_average));
  }; */

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={posterUrl}
        className="card-img-top"
        alt={data?.originatal_title || "No title"}
      />
      <div className="card-body">
        <h5 className="card-title">{data?.title || data?.name}</h5>
        {/* <p className="text-danger">{data.title}</p> */}
        <p className="">{data?.original_title || data?.original_name || ""}</p>
        <p className="">
          {/* {data?.original_language || data?.original_language} */}
          {flags(data.original_language)}
        </p>
        <p className="">
          {/* Voto: {data.vote_average} */}
          {star()}
        </p>
        <p className="card-text">
          {data?.overview.slice(0, 200) || "Non vaaaaaaaaaa"}
        </p>
      </div>
    </div>
  );
}
