import { useState } from "react";
import GridUI from "./Components/GridUI";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  const [giphies, setGiphies] = useState([]);
  return (
    <div>
      <SearchBar setData={setGiphies} />
      <br />
      <div className="container">
        <GridUI data={giphies} />
      </div>
    </div>
  );
}

export default App;
