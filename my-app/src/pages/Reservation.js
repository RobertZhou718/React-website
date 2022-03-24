import React from "react";
import { InlineWidget } from "react-calendly";
import { Trans } from "@lingui/macro";

const Reservation = () => {
  document.getElementById("page-region");
  return (
    <div>
      <div className="p-5 mt-5 container">
        <h1>
          <Trans>Reservation</Trans>
        </h1>
        <div className="reservation bg-light">
          <InlineWidget url="https://calendly.com/sumaccounting" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
