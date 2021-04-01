import React from "react";
import { ContainerDiv } from "./AnswerStyles";

const AnswerComponent = ({ item }) => {
  return <ContainerDiv>{item.name}</ContainerDiv>;
};

export default AnswerComponent;
