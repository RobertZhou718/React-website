import React from "react";
import { Trans } from "@lingui/macro";
const AboutUs = () => {
  return (
    <div>
      <section className="p-5 bg-white mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <h1>
                <Trans>About Us</Trans>
              </h1>
              <p className="mt-5 lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                assumenda reprehenderit debitis optio excepturi tenetur
                provident non repellat quis culpa odit similique, nulla in, sunt
                laborum accusantium unde corrupti. Quaerat? Voluptatem enim
                veritatis ad perferendis expedita magni similique vero
                consectetur veniam dolor dignissimos non quos mollitia, impedit
                esse doloremque sequi a! Aliquid a veritatis adipisci corporis?
                Pariatur atque architecto dicta!
              </p>
            </div>
            <div className="col-md">
              <img
                src="img/biglogo.png"
                alt="logo"
                className="img-fluid d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark">
        <div className="container">
          <div className="text-light">
            <h1 className="text-center">
              <Trans>COVID-19 NOTICE</Trans>
            </h1>
            <h3 className="mt-5">Online Income Tax Options during COVID-19</h3>
            <p className="lead mt-3">
              To respect our clients health and do our part to not spread
              sickness in our community we ask that you wear a mask and
              following distancing guidelines as much as possible in our office.
              We are open for in person meetings but also offer personal income
              tax services with no need to visit our office. The following
              options are available.
            </p>
            <ul style={{ "font-size": "20px" }}>
              <li>
                We use an online software called Zoom for online meetings where
                we can share computer screens and share files as needed. You are
                given access to your own secure portal to upload your documents
                to us prior to our meeting. Start by choosing a meeting time{" "}
                <a href="/reservation">here</a>
              </li>
              <li>
                If a computer screen share is not needed you can also choose to
                simply request access to your secure portal to send us your
                documents and we will contact you once your return is started to
                go through any questions and to complete your return.
              </li>
              <li>
                Another option is to send all documents to us using the secure
                messaging app like Whatsapp or Telegram. Contact us for details
                if you are new to using these apps.
              </li>
            </ul>
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

export default AboutUs;
