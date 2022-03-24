import React from "react";
import { Trans } from "@lingui/macro";
import Terms from "../components/Terms";
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
                <Trans>
                  {" "}
                  Welcome to Sum Accounting! We are a small accounting firm
                  operating year round in Markham Canada. We offer monthly
                  accounting service packages for small business as well as
                  yearly income tax preparation. Our mission is to provide a
                  high level of service to our customers with accuracy, security
                  and a smile! Reach out to us to find out more. I look forward
                  to meeting you!
                </Trans>
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
            <h3 className="mt-5">
              <Trans>Online Income Tax Options during COVID-19</Trans>
            </h3>
            <p className="lead mt-3">
              <Trans>
                To respect our clients health and do our part to not spread
                sickness in our community we ask that you wear a mask and
                following distancing guidelines as much as possible in our
                office. We are open for in person meetings but also offer
                personal income tax services with no need to visit our office.
                The following options are available.
              </Trans>
            </p>
            <ul style={{ fontSize: "20px" }}>
              <li>
                <Trans>
                  We use an online software called Zoom for online meetings
                  where we can share computer screens and share files as needed.
                  You are given access to your own secure portal to upload your
                  documents to us prior to our meeting. Start by choosing a
                  meeting time
                </Trans>
                <a href="/reservation">
                  <Trans>here</Trans>
                </a>
              </li>
              <li>
                <Trans>
                  If a computer screen share is not needed you can also choose
                  to simply request access to your secure portal to send us your
                  documents and we will contact you once your return is started
                  to go through any questions and to complete your return.
                </Trans>
              </li>
              <li>
                <Trans>
                  Another option is to send all documents to us using the secure
                  messaging app like Whatsapp or Telegram. Contact us for
                  details if you are new to using these apps.
                </Trans>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Terms />
    </div>
  );
};

export default AboutUs;
