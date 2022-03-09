import React, { useState } from "react";
import { db } from "../config.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ref, set, get } from "firebase/database";
import { Trans } from "@lingui/macro";

function writeUserData(email, date) {
  try {
    get(ref(db, `reservation/` + date))
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("this time not good");
          throw new Error("this time not good");
        } else {
          set(ref(db, "reservation/" + date.replace(/\W/g, "_")), {
            email: email,
            date: date,
          });
          alert("Success");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    set(ref(db, "reservation/" + date.replace(/\W/g, "_")), {
      email: email,
      date: date,
    });
  }
}
const Reservation = ({ user }) => {
  const [startDate, setStartDate] = useState(null);
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return (
      currentDate.getTime() < selectedDate.getTime() &&
      time.getHours() > 8 &&
      time.getHours() < 20
    );
  };
  const changeTimeCLass = (time) => {
    return time.getHours() > 8 &&
      time.getHours() < 20 &&
      time.getMinutes() === 0
      ? ""
      : "d-none";
  };

  const handleSubmit = () => {
    if (startDate) {
      console.log(startDate.toISOString().split("T")[0]);
      writeUserData(user.email, startDate.toISOString().split("T")[0]);
    }
  };

  return (
    <section className=" p-5 ">
      <div className="container mt-5">
        <h2 className="large">
          <b>
            <strong>
              <Trans>Reservation</Trans>
            </strong>
          </b>
        </h2>
        <h3 className="small">
          <b>
            <Trans>Please select a date and time to make an appointment.</Trans>
          </b>
        </h3>
        <DatePicker
          showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeClassName={changeTimeCLass}
          minDate={new Date()}
          filterTime={filterPassedTime}
          dateFormat="yyyy/MM/dd HH:MM"
          inline
        />
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            disabled={!startDate}
            onClick={handleSubmit}
          >
            <Trans> Select</Trans>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
