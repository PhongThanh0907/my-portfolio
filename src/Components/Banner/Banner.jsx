import React from "react";
import { useState, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import "./banner.styles.scss";
import "animate.css";
import Buttonlight from "../ButtonLight/Buttonlight";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div id="banner">
      <div className="container">
        <div className="banner_row">
          <div className="col-xl-7 col-md-12 col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="banner_content">
                  <div
                    className={
                      isVisible ? "animate__animated animate__slideInLeft" : ""
                    }
                  >
                    <h3 className="tagline">Welcome to my Portfolio</h3>
                    <h1>
                      {`Hi! I'm a `}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <div className="banner_button">
                      <Buttonlight name="ABOUT ME" id="#about" />
                      <Buttonlight name="PORTFOLIO" id="#portfolio" />
                    </div>
                    <div className="banner_icon">
                      <FacebookIcon />
                      <LinkedInIcon />
                      <GitHubIcon />
                      <HomeIcon />
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div
            className="col-xl-5 col-md-12 col-12"
            data-animate="slideInRight 2s"
          >
            <div className="hero-animate" data-animate="move 2s">
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__slideInRight" : ""
                    }
                    src="/img/img-avatar.jpg"
                    alt=""
                  />
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
