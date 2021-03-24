import axios from "axios";

export function authorize() {
  const link = "https://accounts.spotify.com/authorize";
  const client_id = "247756d4553b433e9be76dc13b75c8f3";
  const response_type = "token";
  const redirect_uri = "http://localhost:3000/redirect";

  window.location = `${link}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}`;
}

export function getData(query, token) {
  const link =
    "https://api.spotify.com/v1/search?q=Eminem&type=track%2Cartist&limit=10";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(link, {
      headers: headers,
    })
    .then((response) => console.log(response));
}
