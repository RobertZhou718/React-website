import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [startDate, setStartDate] = useState(null);
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime()&&(time.getHours() > 8 && time.getHours()<20);
  };
  const changeTimeCLass = (time) => {
    return (time.getHours()> 8 && time.getHours()<20)?"":"d-none";
  };
  const handleSubmit =()=> {
    if(startDate){

    }
  }

  return (
    <section className=" p-5 ">
      <div className="container mt-5">
        <h2 className="large">
          <b><strong>Reservation</strong></b>
        </h2>
        <h3 className="small">
          <b>
            Please select a date and time to make an appointment.
          </b>
        </h3>
        <DatePicker showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeClassName={changeTimeCLass}
          minDate={new Date()}
          filterTime={filterPassedTime}
          dateFormat="yyyy/MM/dd H:mm"
          inline
          />
        <div className="col-md-2">
          <button className="btn btn-primary" id="reserve">Select</button>
        </div>
      </div>
    </section>
  )
}

export default Reservation