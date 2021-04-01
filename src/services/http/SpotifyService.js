import { httpClient } from "../axios";

export default class SpotifyService {
  static authorize = () => {
    const link = "https://accounts.spotify.com/authorize";
    const client_id = "247756d4553b433e9be76dc13b75c8f3";
    const response_type = "token";
    const redirect_uri = "http://localhost:3000/redirect";

    window.location = `${link}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${encodeURIComponent(
      redirect_uri
    )}&scope=streaming,user-read-email,user-read-private,streaming`;
  };

  static getData = (query, token) => {
    const link = `https://api.spotify.com/v1/search?q=${query}&type=artist,album%2Cartist&limit=10`;
    return this.get(link, token);
  };

  static getTracks = (type, id, token) => {
    const link = `https://api.spotify.com/v1/search?type=track&q=${type}:${id}&offset=780`;
    return this.get(link, token);
  };

  static getAlbums = async (id, token) =>
    this.get(`https://api.spotify.com/v1/albums/${id}/`, token);

  static get(link, token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return httpClient
      .get(link, {
        headers: headers,
      })
      .then((response) => response.data);
  }
}
