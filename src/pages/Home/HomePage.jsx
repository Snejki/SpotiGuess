import React, { useState } from "react";
import PlayerComponent from "../../components/Player/PlayerComponent";
import Search from "../../components/Search/search.component";
import SpotifyService from "../../services/http/SpotifyService";

const HomePage = () => {
  const [searchData, setSearchData] = useState([]);

  return (
    <div style={{ width: 100 + "%" }}>
      <button onClick={SpotifyService.authorize}>LOGIN</button>
      <Search setSearchData={setSearchData} searchData={searchData} />
    </div>
  );
};

export default HomePage;
