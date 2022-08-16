import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer_row">
          <div className="col-12">
            <div className="footer_icon">
              <FacebookIcon />
              <LinkedInIcon />
              <GitHubIcon />
              <HomeIcon />
            </div>
            <p>© 2022 Phong Pham. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
