import React from "react";
import "./AuthForm.css"
import img from "../../Assets/image/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login() {
    const navigate = useNavigate()

      const login = async (e) => {
        e.preventDefault();
        const value = Object.fromEntries(new FormData(e.target));

        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/login/",
            value
          );
          localStorage.setItem("access_token", response.data.access_token);
          console.log(response);
          navigate("/");
        } catch (error) {
          console.error(error.data);
        }
      };

  return (
    <div className="form_card">
      <div>
        {" "}
        <img src={img} alt="" />
        <h1>
          Hello, <br /> Login Now.
        </h1>
        <div>
          <p>You are new</p>
          <button
            onClick={() => {
              navigate("/authorisation/signup");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <form onSubmit={(e) => login(e)}>
        <input type="text" name="username" placeholder="Username" />
        <label>
          <input type="password" name="password" placeholder="Password" />
          <p>*must be more then 8 characters</p>
        </label>

        <button type="submit">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M12.5 0C6.68958 0 1.81458 3.99167 0.422917 9.375H2.57292C3.90208 5.15104 7.84375 2.08333 12.5 2.08333C18.2458 2.08333 22.9167 6.75417 22.9167 12.5C22.9167 18.2458 18.2458 22.9167 12.5 22.9167C7.84479 22.9167 3.90208 19.849 2.57187 15.625H0.422917C1.81458 21.0083 6.68958 25 12.5 25C19.3927 25 25 19.3927 25 12.5C25 5.60729 19.3927 0 12.5 0ZM11.8167 7.58437L10.3187 9.08229L12.6948 11.4583H0V13.5417H12.6958L10.3187 15.9177L11.8167 17.4156L15.9833 13.249L16.6979 12.5L15.9823 11.751L11.8167 7.58437Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
