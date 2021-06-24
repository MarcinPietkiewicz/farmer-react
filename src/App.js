import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

export default function App() {
  useEffect(() => console.log("mounted"), []);

  return (
    <div className="App">
      <nav>
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#technical-section">
              <li>Play anywhere</li>
            </a>
            <a href="#social-section">
              <li>Develop social skills</li>
            </a>
            <a href="#news-section">
              <li>News</li>
            </a>
            <a id="menu-buy" href="#shop-section">
              <li>BUY</li>
            </a>
          </ul>
        </div>
      </nav>
      <div className="hero-section">
        <main className="bg1">
          <div id="hero">
            <div id="hero-title">Farmer Olaf</div>
            <div id="hero-title-desc">Play anywhere.</div>

            <div id="tldr-container">
              <div className="tldr-section">
                <a className="tldr" href="#technical-section">
                  Play anywhere
                </a>
              </div>
              <div className="tldr-section">
                <a className="tldr" href="#social-section">
                  Easy to play, hard to master
                </a>
              </div>
              <div className="tldr-section">
                <a className="tldr" href="#social-section">
                  Develop social skills
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
