import React, { useState } from "react";
import { Trans } from "@lingui/macro";
const axios = require("axios");

const ContactUs = () => {
  const [content, setContent] = useState([]);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setContent({ ...content, [name]: value });
  };

  const sendMail = () => {
    axios
      .get(
        "/sendmail" +
          "?username=" +
          encodeURI(content.name) +
          "&email=" +
          encodeURI(content.email) +
          "&subject=" +
          encodeURI(content.subject) +
          "&message=" +
          encodeURI(content.message)
      )
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  return (
    <div>
      <section className="bg-light p-5 mt-5">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md mt-5">
              <div className="row mt-5">
                <div className="row mt-4">
                  <div className="col-md-1">
                    <div className="icon d-flex align-items-center justify-content-left">
                      <span className="fa fa-map-marker"></span>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="text">
                      <p>
                        <span>
                          <Trans>Address:</Trans>
                        </span>
                        Unit 119, 445 apple creek blvd, Markham, ON L3R 9X7
                      </p>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-1">
                    <div className="icon d-flex align-items-center justify-content-left">
                      <span className="fa fa-phone"></span>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="text">
                      <p>
                        <span>
                          <Trans>Phone:</Trans>
                        </span>
                        <span>+1 647-830-8595</span>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-1">
                    <div className="icon d-flex align-items-center justify-content-left">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="text">
                      <p>
                        <span>
                          <Trans>Email:</Trans>
                        </span>
                        <a href="jessieshan@sumaccounting.ca">
                          jessieshan@sumaccounting.ca
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-1">
                    <div className="icon d-flex align-items-center justify-content-left">
                      <span className="fa fa-globe"></span>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="text">
                      <p>
                        <span>
                          <Trans>Website</Trans>
                        </span>
                        <a href="sumaccounting.ca">sumaccounting.ca</a>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md">
              <div className=" align-items-center justify-content-center">
                <div className="bg-light">
                  <div className="p-4 rounded shadow-md">
                    <div>
                      <label htmlFor="name" className="form-label">
                        <Trans>Your Name</Trans>
                      </label>
                      <input
                        id="UserName"
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="email" className="form-label">
                        <Trans> Your Email</Trans>
                      </label>
                      <input
                        id="UserEmail"
                        type="text"
                        name="email"
                        onChange={handleOnChange}
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="subject" className="form-label">
                        <Trans> Subject</Trans>
                      </label>
                      <input
                        id="UserSub"
                        type="text"
                        name="subject"
                        onChange={handleOnChange}
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="mt-3 mb-3">
                      <label htmlFor="message" className="form-label">
                        <Trans>Message</Trans>
                      </label>
                      <textarea
                        id="UserMess"
                        name="message"
                        cols="20"
                        rows="6"
                        onChange={handleOnChange}
                        className="form-control"
                        placeholder="message"
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={sendMail}
                      disabled={!content || Object.values(content).length !== 4}
                    >
                      <Trans> Submit Form</Trans>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <h2 className="text-center">
            <Trans>Frequently Asked Questions</Trans>
          </h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
