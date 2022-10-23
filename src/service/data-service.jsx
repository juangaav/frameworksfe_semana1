import axios from "axios";

export async function getPosts() {
  const response = await axios
        .get("https://three-points.herokuapp.com/api/posts", {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        });
    return response.data;
}

export async function login(username, password) {
  const response = await axios
        .post("https://three-points.herokuapp.com/api/login", { username, password });
    return response.data;
}
