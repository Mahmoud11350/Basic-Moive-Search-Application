import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="my-3 p-3 border rounded-3">
      <label
        style={{
          color: "#2196f3",
          fontWeight: "bold",
          fontSize: "20px",
        }}
        className="form-label"
      >
        Search Moives
      </label>
      <input
        type="email"
        className="form-control"
        placeholder="Moive Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
