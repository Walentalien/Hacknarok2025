import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <header className="navbar">
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navbar-right">
          <div className="icon search" />
          <div className="icon message" />
          <div className="icon logout" />
        </div>
      </header>

      <main className="login-box">
        <img
          src="/login-logo.svg"
          alt="Login Trusted Profile"
          className="login-logo"
        />
        <p className="login-subtext">użyj profilu zaufanego</p>
        <button className="login-button">Zaloguj</button>
        <p className="login-description">
          W celu weryfikacji użytkownika, należy zalogować się do systemu przy
          pomocy profilu zaufanego
        </p>
      </main>
    </div>
  );
};

export default Login;
