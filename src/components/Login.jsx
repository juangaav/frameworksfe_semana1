import { useState } from "react";
import { login } from "../service/data-service";

function Login({ setToken, onLoginComplete }) {
    const [error, setError] = useState();

    function setTokenValue(value){
      localStorage.setItem("token", value);
      setToken(value);
    }

    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
  
      login(form.username.value, form.password.value)
        .then((data) => {
          setTokenValue(data.token);
      })
        .catch((err) => {
          setError(err.message);
          setTokenValue("");
      });
    }

    return (
        <div>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="password"
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;