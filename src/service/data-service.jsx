import axios from "axios";

export async function getPosts() {
  const response = await axios
        .get("https://three-points.herokuapp.com/api/posts", {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        });
    return response.data;
}

export async function getUser() {

    const payload = parseJwt(localStorage.getItem("token"));

    const response = await axios
    .get(`https://three-points.herokuapp.com/api/users/${payload.sub}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
}

export async function login(username, password) {
  const response = await axios
        .post("https://three-points.herokuapp.com/api/login", { username, password });
    return response.data;
}

export async function like(id) {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    const response = await axios
    .post(`https://three-points.herokuapp.com/api/posts/${id}/like`, id, {
        headers,
    });
    return response.data;
  }

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}



