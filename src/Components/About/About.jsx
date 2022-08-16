import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./about.styles.scss";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="row_title">
            <TrackVisibility>
              {({ isVisible }) => (
                <h1
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  About Me
                </h1>
              )}
            </TrackVisibility>
          </div>
          <div className="row_info">
            <div className="col">
              <div className="col_left">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__slideInLeft"
                          : ""
                      }
                    >
                      <h2>Something About Me!!!</h2>
                      <p style={{ letterSpacing: "1px" }}>
                        My name is Phong Pham. I started learning how to code in
                        January 2022 at Cybersoft center and spent and I spend a
                        lot of time studying about HTML, CSS, JavaScript,
                        ReactJS and TypeScript. <br />
                        And I realized that I really like coding and I want to
                        make really good products for my customers. So I'm
                        looking for a suitable job where I can practice and hone
                        my skills.
                      </p>
                      <h3>
                        Short-term Goal: Improving as well as learning many
                        skills at programming. Become Fullstack Developer as
                        soon as possible.
                      </h3>
                      <h3>
                        Long-term Goals: Become a Project Manager with
                        professional skills.
                      </h3>
                    </div>
                  )}
                </TrackVisibility>
              </div>
            </div>
            <div className="col">
              <div className="col_right">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__slideInRight"
                          : ""
                      }
                    >
                      <h2>Education</h2>
                      <p>2016-2018</p>
                      <h3>HO CHI MINH UNIVERSITY OF TRANSPORT</h3>
                      <p>Career: INFORMATION TECHNOLOGY</p>
                      <div className="about-color"></div>
                      <p>01/2022 - 08/2022</p>
                      <h3>CYBERSOFT</h3>
                      <p>Career: FRONTEND DEVELOPER</p>
                    </div>
                  )}
                </TrackVisibility>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
