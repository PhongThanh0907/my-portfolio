import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Loading from "../Loading/Loading";
import TrackVisibility from "react-on-screen";
import "./portfolio.styles.scss";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="portfolio_row">
          <div className="portfolio_title">
            <TrackVisibility>
              {({ isVisible }) => (
                <h1
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  PORTFOLIO
                </h1>
              )}
            </TrackVisibility>
          </div>
          <div className="portfolio_content">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInRight" : ""
                  }
                >
                  <Tabs
                    defaultActiveKey="project1"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="project1" title="Project 1">
                      <div className="project_row">
                        <div className="project_img" data-animate="move 2s">
                          <img src="./img/project1.jpg" alt="" />
                        </div>
                        <div
                          style={{ paddingLeft: "20px" }}
                          className="project_content"
                        >
                          <h3>My Portfolio Website</h3>
                          <p>
                            This project is very special because i use a lot of
                            animations, user experience and links between tags.
                          </p>
                          <ul className="project_tab">
                            <li>React</li>
                            <li>CSCC</li>
                            <li>Animate</li>
                            <li>Bootstrap</li>
                            <li>Responsive</li>
                          </ul>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="project2" title="Project 2">
                      <div className="project_row">
                        <div
                          style={{ paddingRight: "10px" }}
                          className="project_content"
                        >
                          <h3 style={{ paddingBottom: "20px" }}>
                            Movie Booking App
                          </h3>
                          <h4>Link Web :</h4>
                          <a href="https://movie-app-booking-eight.vercel.app/?fbclid=IwAR2UxAdn9wqJ_8i_bZvJQ_ksSFH4M6Bl4RQ0rPPnlNAUmviqAaJW5MESDu0">
                            Movie-app-booking-eight.vercel.app
                          </a>{" "}
                          <br />
                          <h4>Link Github :</h4>
                          <a href="https://github.com/PhongThanh0907/movie-app-booking">
                            Github.com/PhongThanh0907/movie-app-booking
                          </a>
                          <ul
                            style={{ paddingTop: "30px" }}
                            className="project_tab"
                          >
                            <li>React</li>
                            <li>Typescript</li>
                            <li>CSCC</li>
                            <li>MaterialUI + React Bootstrap</li>
                            <li>Redux - Redux-toolkit</li>
                            <li>Others...</li>
                          </ul>
                        </div>
                        <div className="project_img" data-animate="move 2s">
                          <img src="./img/project 2.jpg" alt="" />
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="project3" title="Project 3">
                      <div className="loading" style={{ height: "470px" }}>
                        <Loading name="Loading" />
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
