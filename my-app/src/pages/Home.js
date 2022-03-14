import React from "react";
import { Trans } from "@lingui/macro";

const Home = () => {
  return (
    <div>
      <section className="text-light">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/1.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption text-start text-dark container py-5 my-5">
                <h1>INCOME TAXES</h1>
                <p className="lead">
                  Income tax is one of life's biggest expenses. If you are a
                  small business owner, in most cases tax preparation should be
                  handled by a professional. At Sum Accounting, we provide
                  year-round tax services to our small business and farmer
                  clients who have monthly accounting plans with us. We are also
                  happy to work with your existing CPA or tax accountant. Note -
                  we are currently not doing new basic personal income tax work,
                  but are focusing on monthly accounting services.
                </p>
                <a href="/reservation" className="btn btn-dark my-3">
                  <Trans>Learn more</Trans>
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption  text-center ">
                <h1>PAYROLL</h1>
                <h3>
                  Payroll can be a headache for any company due to its time
                  sensitiveness and recurring nature. Why not provide us with
                  the details to ensure an accurate and timely payrun everytime
                  – year end T4s included.
                </h3>
                <a href="/reservation" className="btn-lg btn-dark mt-3">
                  <Trans>Learn more</Trans>
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/3.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption text-center text-dark">
                <h1>MONTHLY ONLINE ACCOUNTING</h1>
                <p>
                  Let us manage your books so your business can run at its peak
                  with your financials updated monthly and your numbers
                  available to you anywhere. We are not your typical bookkeeping
                  or accounting firm. We believe meaningful, year round
                  relationships are equally as important as accurate numbers.
                </p>
                <a href="/reservation" className="btn btn-dark mt-3">
                  <Trans>Learn more</Trans>
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/4.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption text-end">
                <h1>OTHER BUSINESS SERVICES</h1>
                <p>
                  Accounting requirements and needs of small businesses and
                  individuals today cover a range of things. Maybe you require a
                  mid year financial statement (typically prepared w/T2 taxes)
                  for funding or need an electronic bill payment system to
                  streamline your accounts payable. Just give us a call!
                  204.816.8655
                </p>
                <a href="/Business.html" className="btn btn-dark mt-3">
                  <Trans>Learn more</Trans>
                </a>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="p-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-md">
              <div className="card border-light bg-dark text-light">
                <img
                  src="img/personal.jpg"
                  className="card-img-top"
                  alt="Personal"
                />
                <div className="card-body text-center">
                  <div className="card-title ">
                    <h4>
                      <Trans>Personal Tax</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit veritatis velit necessitatibus, sequi, in est tempora
                    nulla quaerat archite
                  </div>
                  <a href="/Personal.html" className="btn btn-primary mt-3">
                    <Trans>Learn more</Trans>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card border-light bg-light text-dark">
                <img
                  src="img/business.jpg"
                  className="card-img-top"
                  alt="Business"
                />
                <div className="card-body text-center">
                  <div className="card-title">
                    <h4>
                      <Trans>Business Tax</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit veritatis velit necessitatibus, sequi, in est tempora
                    nulla quaerat archite
                  </div>
                  <a href="/Business.html" className="btn btn-dark mt-3">
                    <Trans>Learn more</Trans>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card border-light bg-dark text-light">
                <img src="img/house.jpg" className="card-img-top" alt="House" />
                <div className="card-body text-center">
                  <div className="card-title">
                    <h4>
                      <Trans>Housing Related Tax</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit veritatis velit necessitatibus, sequi, in est tempora
                    nulla quaerat archite
                  </div>
                  <a href="/Housing.html" className="btn btn-primary mt-3">
                    <Trans>Learn more</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-white text-dark text-center text-md-start">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <h2>
                <Trans>Personal Tax</Trans>
              </h2>
              <p className="my-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                odit atque laudantium asperiores sit deserunt totam quis eius
                quas accusamus, ex voluptatibus ea? Atque veniam ratione, sequi
                doloribus itaque in. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Unde odit atque laudantium asperiores sit
                deserunt totam quis eius quas accusamus, ex voluptatibus ea?
                Atque veniam ratione, sequi doloribus itaque in.
              </p>
              <a href="/Personal.html" className="btn btn-primary btn-lg">
                <Trans> Learn more</Trans>
              </a>
            </div>
            <div className="col-md">
              <img
                src="img/money1.png"
                alt="showcase"
                className="img-fluid d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-dark text-light text-center text-md-start">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <img
                src="img/money2.png"
                alt="showcase"
                className="img-fluid d-none d-md-block"
              />
            </div>
            <div className="col-md">
              <h2>
                <Trans>Business Tax</Trans>
              </h2>
              <p className="my-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                odit atque laudantium asperiores sit deserunt totam quis eius
                quas accusamus, ex voluptatibus ea? Atque veniam ratione, sequi
                doloribus itaque in. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Unde odit atque laudantium asperiores sit
                deserunt totam quis eius quas accusamus, ex voluptatibus ea?
                Atque veniam ratione, sequi doloribus itaque in.
              </p>
              <a href="/Business.html" className="btn btn-primary btn-lg">
                <Trans>Learn more</Trans>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-light text-dark text-center text-md-start">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <h2>
                <Trans>Housing Related Tax</Trans>
              </h2>
              <p className="my-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                odit atque laudantium asperiores sit deserunt totam quis eius
                quas accusamus, ex voluptatibus ea? Atque veniam ratione, sequi
                doloribus itaque in. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Unde odit atque laudantium asperiores sit
                deserunt totam quis eius quas accusamus, ex voluptatibus ea?
                Atque veniam ratione, sequi doloribus itaque in.
              </p>
              <a href="/Housing.html" className="btn btn-primary btn-lg">
                <Trans>Learn more</Trans>
              </a>
            </div>
            <div className="col-md">
              <img
                src="img/hands.jpg"
                alt="showcase"
                className="img-fluid d-none d-md-block"
              />
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

      <section className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">
            <Trans>Contact Us</Trans>
          </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Trans>Phone:</Trans> (647)-830-8595
            </li>
            <li className="list-group-item">
              <Trans>E-mail:</Trans> jessishan@sumaccounting.ca
            </li>
            <li className="list-group-item">
              <Trans>Address:</Trans> Unit 119,445 apple creek blvd, Markham, ON
              L3R 9X7
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
