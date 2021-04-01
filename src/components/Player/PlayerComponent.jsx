import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const PlayerComponent = ({
  spotify_uri,
  isVisible,
  musicStartPosition,
  musicPauseAfter,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const token = cookies["token"];
  const [device_id, set_device_id] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!window.onSpotifyWebPlaybackSDKReady) {
      window.onSpotifyWebPlaybackSDKReady = initializePlayer;
    } else initializePlayer();
  }, []);

  const playMusic = () => {
    play({
      playerInstance: player,
      spotify_uri: spotify_uri,
    });

    if (musicPauseAfter && musicPauseAfter > 0) {
      setTimeout(() => pauseMusic(), musicPauseAfter * 1000);
    }
  };

  const pauseMusic = () => {
    player.pause();
  };

  const play = ({
    spotify_uri,
    playerInstance: {
      _options: { getOAuthToken },
    },
  }) => {
    getOAuthToken((access_token) => {
      fetch(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            uris: [spotify_uri],
            position_ms: musicStartPosition,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
    });
  };

  const initializePlayer = () => {
    const token = cookies["token"];
    let pl = new window.Spotify.Player({
      name: "SPotiGuess Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    pl.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
    pl.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
    pl.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    pl.addListener("playback_error", ({ message }) => {
      console.error(message);
    });
    pl.addListener("player_state_changed", (state) => {
      console.log(state);
    });
    pl.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
      set_device_id(device_id);
    });
    pl.addListener("not_ready", ({ device_id }) => {});
    pl.connect();

    setPlayer(pl);
  };

  return (
    <div>
      <button onClick={playMusic}>PLAY MUSIC SOME xD</button>
    </div>
  );
};

export default PlayerComponent;
