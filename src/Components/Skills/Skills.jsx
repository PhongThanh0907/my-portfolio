import React from "react";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TrackVisibility from "react-on-screen";
import "./skills.styles.scss";

const Skills = () => {
  const renderSlides = () =>
    [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "TypeScript",
      "Animate",
      "Responsive",
      "Bootstrap",
      "MaterialUI",
    ].map((num) => (
      <div key={num.toString()} className="circle">
        <h3>{num}</h3>
      </div>
    ));
  return (
    <div id="skills">
      <div className="skills_row">
        <div className="skill_title">
          <TrackVisibility>
            {({ isVisible }) => (
              <h1
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                SKILLS
              </h1>
            )}
          </TrackVisibility>
        </div>
        <TrackVisibility>
          {({ isVisible }) => (
            <p className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              Skills in the process of learning and working with many projects
            </p>
          )}
        </TrackVisibility>
        <div className="skill_slider" data-animate="slideInLeft 2s">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__slideInLeft" : ""
                }
              >
                <Slider
                  className="slider-option"
                  dots={false}
                  slidesToShow={3}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                >
                  {renderSlides()}
                </Slider>
                <Slider
                  className="slider-mobile"
                  dots={false}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                >
                  {renderSlides()}
                </Slider>
                <Slider
                  className="slider-tablet"
                  dots={false}
                  slidesToShow={2}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={3000}
                >
                  {renderSlides()}
                </Slider>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};

export default Skills;
