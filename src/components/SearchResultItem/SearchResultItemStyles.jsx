import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 10px;

  :hover {
    background-color: red;
    cursor: pointer;
  }

  display: flex;
`;

export const TextSpan = styled.span`
  margin: auto;
  display: inline-block;
  width: calc(100% - 65px);
  text-align: center;
`;

export const Image = styled.img`
  display: inline-block;
`;
