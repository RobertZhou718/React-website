import React from "react";
import { Trans } from "@lingui/macro";

const Terms = () => {
  return (
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
                <Trans> How can I use Tax Online function?</Trans>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Trans>
                
                  After contact with us, you could log in to our website, and
                  then use the Tax Online function to submit your basic
                  information and required documents.
                </Trans>
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
                <Trans>How can I contact you?</Trans>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Trans>
                  {" "}
                  You can contact us by phone, email, 15-minute phone meeting
                  reservation, or the form on the contact us page.
                </Trans>
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
                <Trans>Which service should I book?</Trans>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Trans>
                  This is based on your needs, you can proceed to the next step
                  with a brief communication with us via a 15-minute conference
                  call, after which we will guide you to your next appointment
                  based on your circumstances.
                </Trans>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
