import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "react-bootstrap/Button";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Form from "react-bootstrap/Form";
import TrackVisibility from "react-on-screen";
import "./contact.styles.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="contact_row">
          <div className="contact_title">
            <TrackVisibility>
              {({ isVisible }) => (
                <h1
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  CONTACT
                </h1>
              )}
            </TrackVisibility>
          </div>
          <div className="contact_content">
            <div className="col-sm-6 col-md-6 col-12">
              <div className="contact_info">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__slideInLeft"
                          : ""
                      }
                    >
                      <h2>Contact Info</h2>
                      <span>
                        <EmailIcon />
                        Email: phong.thanh971997@gmail.com
                      </span>
                      <span>
                        <GitHubIcon />
                        <a href="https://github.com/PhongThanh0907">
                          github.com/PhongThanh0907
                        </a>
                      </span>
                      <span>
                        <ContactPhoneIcon />
                        Phone Number: 0938458350 - 0979399509
                      </span>
                      <span>
                        <LocationOnIcon />
                        Address: Doan Van Bo, P14, Q4, TPHCM
                      </span>
                    </div>
                  )}
                </TrackVisibility>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-12">
              <div className="contact_form">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__slideInRight"
                          : ""
                      }
                    >
                      <h2>Contact Form</h2>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="email" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
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

export default Contact;
