import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="navbar">
        <div className="navbar-left">
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="icon search"></div>
          <div className="icon message"></div>
          <div className="icon user"></div>
          <span className="login-text">Zaloguj</span>
        </div>
      </header>

      <main className="content">
        <h1>Witaj na Forum</h1>

        <div className="main-section">
          <div className="topics">
            <div className="box">
              <div className="box-header">
                <span>Wybrane Tematy</span>
                <span className="info-icon">ℹ️</span>
              </div>
              <div className="box-body">
                <p>-Temat nr 1</p>
                <p>-Temat nr 2</p>
                <p>-Temat nr 3</p>
                <p>-Temat nr 4</p>
              </div>
            </div>

            <div className="box">
              <div className="box-header">
                <span>Tematy w twojej okolicy</span>
                <span className="info-icon">ℹ️</span>
              </div>
              <div className="box-body">
                <p>-Temat nr 1</p>
                <p>-Temat nr 2</p>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Mapa</h2>
            <hr />
            <div className="map"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
