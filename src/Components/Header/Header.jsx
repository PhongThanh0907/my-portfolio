import React from "react";
import "./Header.styles.scss";
import Button from "../Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useState, useEffect } from "react";
import "animate.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="myname" data-animate="slideInDown 2s">
        <a href="#">-Thanh Phong-</a>
      </div>
      <div className="nav_header">
        <ul className={click ? "nav-option active" : "nav-option"}>
          <li className="option">
            <a href="#banner">Home</a>
          </li>
          <li className="option">
            <a href="#about">About</a>
          </li>
          <li className="option">
            <a href="#skills">Skills</a>
          </li>
          <li className="option">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="option">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <CloseIcon /> : <FormatAlignJustifyIcon />}
      </div>

      <div className="nav-button">
        <Button name="Let's Connect" />
      </div>
    </div>
  );
};

export default Header;
