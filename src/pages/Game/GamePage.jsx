import { faForward, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AnswerComponent from "../../components/Answer/AnswerComponent";
import PlayerComponent from "../../components/Player/PlayerComponent";
import { nextQuestion } from "../../redux/game/game.actions";
import GameService from "../../services/GameService";
import {
  ContainerDiv,
  FooterContainer,
  MusicIcon,
  NextSongIcon,
} from "./GameStyles";

const GamePage = ({
  location: {
    state: { item },
  },
  initQuestions,
  nextQuestion,
  currentQuestionNumber,
  currentQuestion,
  questionsCount,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const token = cookies["token"];
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    GameService.getQuestions(item.type, item.id, token).then((tracks) => {
      setTracks(tracks);
    });
  }, []);

  useEffect(() => {
    initQuestions(GameService.drawQuestions(10, tracks, 10));
  }, [tracks]);

  const onNextSong = (ev) => nextQuestion();

  const onSetAnswer = (ev, id) => {};

  return (
    <ContainerDiv>
      {questionsCount > 0 && (
        <>
          {currentQuestionNumber + 1}/{questionsCount}
          <MusicIcon icon={faMusic} />
          <PlayerComponent
            spotify_uri={currentQuestion.uri}
            musicPauseAfter="10"
            musicStartPosition={currentQuestion.start_duration}
          />
          {currentQuestion.answers.map((item, id) => (
            <AnswerComponent item={item} />
          ))}
          <FooterContainer>
            <NextSongIcon icon={faForward} onClick={onNextSong} />
          </FooterContainer>
        </>
      )}
    </ContainerDiv>
  );
};

export default GamePage;
