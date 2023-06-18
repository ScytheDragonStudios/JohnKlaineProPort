import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './Profile.css';

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Enthusiastic Dev",
      "C# Developer",
      "Unity Game Dev",
      "Mobile Game Dev",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/john.f.klaine">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/scythedragonstudios/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCrA2_Aadvy7w4ThUZjtMLKA">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/ScyDragonTeam">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">John</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1 style={{ color: "red" }}>
                I'm a
                <span
                  style={{
                    fontweight: "bold",
                    color: "green",
                    marginLeft: "5px",
                  }}
                >
                  {typeEffect}
                </span>
              </h1>
              <span className="profile-role-tagline">
                Game Developer with a passion for Casual, RPG, and Strategy
                Style gameplay
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me</button>
            <a href="2023Resume.docx" download="John Klaine.docx">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
