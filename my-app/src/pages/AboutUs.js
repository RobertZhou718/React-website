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
          <div id="section1" className="text-light">
            <h1 className="text-center">
              <Trans>COVID-19 Related Tax Assistance</Trans>
            </h1>
            <h3 className="mt-5">Lorem ipsum dolor</h3>
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non placeat, quam, ullam quod sit vitae magnam ipsam architecto
              incidunt recusandae quisquam, eum maiores excepturi numquam illo
              ipsa ex accusamus?
            </p>
            <h3 className="mt-3">Lorem ipsum dolor</h3>
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non placeat, quam, ullam quod sit vitae magnam ipsam architecto
              incidunt recusandae quisquam, eum maiores excepturi numquam illo
              ipsa ex accusamus?
            </p>
            <h3 className="mt-3">Lorem ipsum dolor</h3>
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non placeat, quam, ullam quod sit vitae magnam ipsam architecto
              incidunt recusandae quisquam, eum maiores excepturi numquam illo
              ipsa ex accusamus?
            </p>
            <h3 className="mt-3">Lorem ipsum dolor</h3>
            <p className="lead mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              non placeat, quam, ullam quod sit vitae magnam ipsam architecto
              incidunt recusandae quisquam, eum maiores excepturi numquam illo
              ipsa ex accusamus?
            </p>
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
