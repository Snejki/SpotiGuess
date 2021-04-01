import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ContainerDiv = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: 720px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NextSongIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  color: blue;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const MusicIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  color: #aaa;
`;

export const FooterContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row-reverse;
`;
