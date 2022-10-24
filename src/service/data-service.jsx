import axios from "axios";

export async function getPosts() {
  const response = await axios
        .get("https://three-points.herokuapp.com/api/posts", {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .catch((err) => {
            if(err.response.status === 401){
                localStorage.setItem("token", "");
            }
        });
    return response.data;
}

export async function getUser() {
    const response = await axios
    .get("https://three-points.herokuapp.com/api/users/613693fc24d622245e104493", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .catch((err) => {
        if(err.response.status === 401){
            localStorage.setItem("token", "");
        }
    });
    return response.data;
}

export async function login(username, password) {
  const response = await axios
        .post("https://three-points.herokuapp.com/api/login", { username, password })
        .catch((err) => {
            if(err.response.status === 401){
                localStorage.setItem("token", "");
            }
          });
    return response.data;
}

export async function like(id) {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    const response = await axios
    .post(`https://three-points.herokuapp.com/api/posts/${id}/like`, id, {
        headers,
    })
    .catch((err) => {
        if(err.response.status === 401){
            localStorage.setItem("token", "");
        }
      });
    
    return response.data;
  }

