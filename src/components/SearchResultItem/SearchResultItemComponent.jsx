import React from "react";
import { Link } from "react-router-dom";

import { ContainerDiv, TextSpan, Image } from "./SearchResultItemStyles";

const SearchResultItem = ({ item }) => {
  return (
    <ContainerDiv>
      <Link
        to={{
          pathname: "/details",
          state: {
            item: item,
          },
        }}
      >
        <Image src={item?.images[2]?.url} width="64px" />
        <TextSpan> {item?.name}</TextSpan>
      </Link>
    </ContainerDiv>
  );
};

export default SearchResultItem;
