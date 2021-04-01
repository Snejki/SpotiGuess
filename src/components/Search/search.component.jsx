import React from "react";
import SpotifyService from "../../services/http/SpotifyService";
import { useCookies } from "react-cookie";
import { useState } from "react";

import { Div, Input, SearchResultContainer } from "./Search.styled";
import { ContainerDiv } from "../SearchResultItem/SearchResultItemStyles";
import SearchResultItem from "../SearchResultItem/SearchResultItemComponent";

const Search = ({ setSearchData, searchData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const inputOnChange = (event) => {
    // TODO: More options to pass
    SpotifyService.getData(event.target.value, cookies["token"]).then((res) => {
      setSearchData(res);
    });
  };

  return (
    <Div className="search-form">
      <Input
        type="text"
        onChange={inputOnChange}
        placeholder="Type artist or album"
      />
      <SearchResultContainer>
        {searchData?.albums?.items && (
          <div>
            <h2>Albums</h2>
            {searchData?.albums?.items?.map((el, key) => (
              <SearchResultItem item={el} />
            ))}
          </div>
        )}
        {searchData?.artists?.items && (
          <div>
            <h2>Artists</h2>
            {searchData?.artists?.items?.map((el, key) => (
              <SearchResultItem item={el} />
            ))}
          </div>
        )}
      </SearchResultContainer>
    </Div>
  );
};

export default Search;
