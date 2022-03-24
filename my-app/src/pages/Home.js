import React from "react";
import { Trans } from "@lingui/macro";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
const Home = () => {
  return (
    <div>
      <section style={{ height: "100vh" }}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image": "url(img/bg.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="container">
              <div className="title" data-swiper-parallax="-300">
                <Trans> INCOME TAXES</Trans>
              </div>
              <div className="text lead d-flex">
                <p>
                  <Trans>
                    Income taxes are one of life’s largest expenses. If you are
                    a small business owner in most cases tax prep should be
                    handled by the pros.<a href="#More">Learn more...</a>
                  </Trans>
                </p>
              </div>
              <a
                className="btn btn-lg btn-danger my-3 slide_btn"
                href="https://calendly.com/sumaccounting/15-min-phone-meeting"
              >
                <Trans> Get Start</Trans>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="title" data-swiper-parallax="-300">
                <Trans> PAYROLL</Trans>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  <Trans>
                    Payroll can be a headache for any company due to its time
                    sensitiveness and recurring nature.
                    <a href="#More">Learn more...</a>
                  </Trans>
                </p>
              </div>
              <a
                className="btn btn-lg btn-danger my-3 slide_btn"
                href="https://calendly.com/sumaccounting/15-min-phone-meeting"
              >
                <Trans> Get Start</Trans>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="title" data-swiper-parallax="-300">
                <Trans>MONTHLY ONLINE ACCOUNTING</Trans>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  <Trans>
                    Let us manage your books so your business can run at its
                    peak with your financials updated monthly and your numbers
                    available to you anywhere.<a href="#More">Learn more...</a>
                  </Trans>
                </p>
              </div>
              <a
                className="btn btn-lg btn-danger my-3 slide_btn"
                href="https://calendly.com/sumaccounting/15-min-phone-meeting"
              >
                <Trans> Get Start</Trans>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="title" data-swiper-parallax="-300">
                <Trans>OTHER BUSINESS SERVICES</Trans>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  <Trans>
                    Accounting requirements and needs of small businesses and
                    individuals today cover a range of things.
                    <a href="#More">Learn more...</a>
                  </Trans>
                </p>
              </div>
              <a
                className="btn btn-lg btn-danger my-3 slide_btn"
                href="https://calendly.com/sumaccounting/15-min-phone-meeting"
              >
                <Trans> Get Start</Trans>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="p-5 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md  ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Trans>Phone:</Trans> (647)-830-8595
                </li>
                <li className="list-group-item">
                  <Trans>E-mail:</Trans> jessishan@sumaccounting.ca
                </li>
                <li className="list-group-item">
                  <Trans>Address:</Trans> Unit 119,445 apple creek blvd,
                  Markham, ON L3R 9X7
                </li>
                <li className="list-group-item">
                  <Trans>Website:</Trans> sumaccounting.ca
                </li>
              </ul>
              <a href="/contactus" className="btn btn-primary my-3">
                <Trans> Contact us</Trans>
              </a>
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
      <section className="p-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-5">
            <div className="col-md-6 col-lg-3" id="More">
              <div className="card border-light bg-light text-dark">
                <img
                  src="img/company.jpg"
                  className="card-img-top"
                  alt="Personal"
                />
                <div className="card-body text-center">
                  <div className="card-title ">
                    <h4>
                      <Trans>INCOME TAXES</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    <Trans>
                      {" "}
                      Income taxes are one of life’s largest expenses. If you
                      are a small business owner in most cases tax prep should
                      be handled by the pros. Here at GP Accounting we provide
                      year round tax services for our small business and farmer
                      customers that are on monthly accounting plans with us. We
                      are also happy to work with your existing CPA or tax
                      accountant. NOTE – We are not taking on new basic personal
                      income tax work at this time but are rather focused on
                      monthly accounting services.
                    </Trans>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light  border-light text-dark">
                <img
                  src="img/payroll.jpg"
                  className="card-img-top"
                  alt="Business"
                />
                <div className="card-body text-center">
                  <div className="card-title">
                    <h4>
                      <Trans>PAYROLL</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    <Trans>
                      {" "}
                      Payroll can be a headache for any company due to its time
                      sensitiveness and recurring nature. Why not provide us
                      with the details to ensure an accurate and timely payrun
                      everytime – year end T4s included.
                    </Trans>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card  border-light bg-light text-dark">
                <img
                  src="img/accounting.jpg"
                  className="card-img-top"
                  alt="House"
                />
                <div className="card-body text-center">
                  <div className="card-title">
                    <h4>
                      <Trans>MONTHLY ONLINE ACCOUNTING</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    <Trans>
                      Let us manage your books so your business can run at its
                      peak with your financials updated monthly and your numbers
                      available to you anywhere. We are not your typical
                      bookkeeping or accounting firm. We believe meaningful,
                      year round relationships are equally as important as
                      accurate numbers.
                    </Trans>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light border-light text-dark">
                <img src="img/hands.jpg" className="card-img-top" alt="House" />
                <div className="card-body text-center">
                  <div className="card-title">
                    <h4>
                      <Trans>OTHER BUSINESS SERVICES</Trans>
                    </h4>
                  </div>
                  <div className="card-text">
                    <Trans>
                      {" "}
                      Accounting requirements and needs of small businesses and
                      individuals today cover a range of things. Maybe you
                      require a mid year financial statement (typically prepared
                      w/T2 taxes) for funding or need an electronic bill payment
                      system to streamline your accounts payable.
                    </Trans>
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
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
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
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
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
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
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

export default Home;
