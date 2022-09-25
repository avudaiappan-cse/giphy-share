import axios from "axios";
import React, { useState } from "react";

const SearchBar = ({ setData }) => {
  const [searchText, setSearchText] = useState("");
  const [searchItem, setSearchItem] = useState("gifs");
  const search = async () => {
    if (searchText) {
      const response = await axios.get(
        `https://api.giphy.com/v1/${searchItem}/search`,
        {
          params: {
            api_key: process.env.REACT_APP_GIPHY_API_KEY,
            q: searchText,
            limit: 48,
          },
        }
      );
      setData(response.data.data);
    }
  };

  return (
    <div className="searchbox">
      <h2>Giphy Finder</h2>
      <div className="searchbox-container">
        <input
          type="search"
          className="search-box"
          value={searchText}
          placeholder="Search something"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
        <input
          type="radio"
          name="search-type"
          value="gifs"
          defaultChecked
          onChange={(e) => setSearchItem(e.target.value)}
        />{" "}
        Gif
        <input
          type="radio"
          name="search-type"
          value="stickers"
          onChange={(e) => setSearchItem(e.target.value)}
        />{" "}
        Sticker
      </div>
    </div>
  );
};

export default SearchBar;
