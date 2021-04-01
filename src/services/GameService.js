import SpotifyService from "./http/SpotifyService";

export default class GameService {
  static getQuestions = async (type, id, token) => {
    let tracks = [];

    switch (type) {
      case "album":
        const data = await SpotifyService.getAlbums(id, token);
        const albums = data.tracks.items;
        tracks = [...tracks, ...albums];
        break;

      case "artist":
        break;

      case "playslis":
        break;
    }

    return tracks;
  };

  static drawQuestions = (questionsCount, tracks, howLongPlay) => {
    let questions = [];
    howLongPlay *= 1000; // to ms

    const tracksCount = tracks.length;

    if (tracksCount > 0) {
      for (let x = 0; x < questionsCount; x++) {
        const ids = tracks.map((x) => x.id);
        const number = this.randomNumber(0, ids.length - 1);
        const question = tracks.filter((x) => x.id == ids[number])[0];

        const questionToAdd = {
          answers: this.getAnswers(question, tracks),
          uri: question.uri,
          id: question.id,
          name: question.name,
          duration: question.duration_ms,
          start_duration: this.randomNumber(
            0,
            question.duration_ms - howLongPlay
          ),
          answer: "",
        };

        questions.push(questionToAdd);
      }
    }

    return questions;
  };

  static getAnswers = (question, tracks) => {
    const tracksToRename = tracks.slice();
    const correctAnswerIndex = tracksToRename.findIndex(
      (x) => x.id === question.id
    );
    tracksToRename.splice(correctAnswerIndex, 1);

    const answers = [];
    for (let i = 0; i < 3; i++) {
      const rand = this.randomNumber(0, tracksToRename.length - 1);
      const answer = {
        id: tracksToRename[rand].id,
        name: tracksToRename[rand].name,
        selected: false,
      };

      tracksToRename.splice(rand, 1);
      answers.push(answer);
    }
    const randomIndex = this.randomNumber(0, answers.length - 1);

    answers.splice(randomIndex, 0, {
      id: question.id,
      name: question.name,
      selected: false,
    });

    return answers;
  };

  static randomNumber = (minimum, maximum) =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
