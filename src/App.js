import React, { useState } from "react";
import Search from "./Components/SearchBar/SearchBar";
import Moives from "./Components/Moives/Moives";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      <Moives search={search} />
    </div>
  );
};

export default App;
