import React, { useEffect, useState } from "react";
import axios from "axios";
import Moive from "./Moive";

const Moives = ({ search }) => {
  const [moives, setMoives] = useState([]);
  useEffect(() => {
    const moiveFetch = async () => {
      const response = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=92869290",
        {
          params: {
            s: search,
          },
        }
      );
      setMoives(response.data.Search);
    };

    let timerId = setTimeout(() => {
      if (search) {
        moiveFetch();
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  let rendered = "No Moives To Render";
  if (moives) {
    rendered = moives.map((moive, index) => {
      return (
        <Moive
          image={moive.Poster}
          key={moive.imdbID + index}
          title={moive.Title}
        />
      );
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexBasis: "300px",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "space-around",
      }}
    >
      {rendered}
    </div>
  );
};
export default Moives;
