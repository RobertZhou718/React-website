import React from 'react'

const TaxOnline = () => {
    return (
        <><section class=" p-5 ">
            <div class="container mt-5">
                <h2 class="large">
                    <b><strong>Reservation</strong></b>
                </h2>
                <h3 class="small">
                    <b>
                        Please select a date and time to make an appointment.
                    </b>
                </h3>
                <div class="row">
                    <div class="col-md-5">
                        <div class=" input-group ">
                            <i class="bi bi-calendar-date input-group-text"></i>
                            <input type="text" id="datepicker2" class="datepicker_input form-control " placeholder="DD/MM/YYYY" required />
                        </div>
                    </div>

                    <div class="col-md-5">
                        <select class="form-select" id="time" required>
                            <option selected disabled placeholder="Time">Choose...</option>
                            <option>8:00</option>
                            <option>9:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                            <option>12:00</option>
                            <option>13:00</option>
                            <option>14:00</option>
                            <option>15:00</option>
                            <option>16:00</option>
                            <option>17:00</option>
                            <option>18:00</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary" id="reserve">Select</button>
                    </div>

                </div>
            </div>
        </section>
            <hr />
            <section>
                <form action="#" class="form-horizontal">
                    <div class="container">
                 <div class="row">
                            <div class="col-md-8">
                                <span class="medium" Style={"background-color: blanchedalmond;"}>
                                    Due to the high volume of customers, our current process time will be: <b><strong>1 DAY</strong></b>
                                </span>
                            </div>
                        </div>
                        <h2 class="large">
                            <b><strong>Tax Form</strong></b>
                        </h2>
                        <form action="#" class="form-horizontal" >
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-4 ">
                                        <label for="validationCustom01" class="form-label">First name<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" placeholder="Mark" required/>
                                    </div>
                                    <div class="col-md-4 ">
                                        <label for="validationCustom02" class="form-label">Last name<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" placeholder="Otto" required/>
                                    </div>
                                    <div class="col-md-4 ">
                                        <label for="validationCustomBirth" class="form-label">Date of Birth<span class="text-danger" >*</span></label>
                                        <div class="input-group has-validation">
                                            <input type="text" class="form-control taxform datepicker_input" id="datepicker1" placeholder="DD/MM/YYYY" aria-describedby="inputGroupPrepend" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 ">
                                        <label for="validationCustom01" class="form-label">SIN#<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" placeholder="9 digits" required/>
                                    </div>
                                    <div class="col-md-4 ">
                                        <label for="validationCustom01" class="form-label">Email<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" placeholder="a@example.com" required/>
                                    </div>
                                    <div class="col-md-4 ">
                                        <label for="validationCustom01" class="form-label">Phone<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" placeholder="11 digits" required/>

                                    </div>
                                    <div class="col-md-12 position-relative ">
                                        <label for="validationTooltip05" class="form-label">Mailing Address<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" placeholder="UnitNumber, StreetNumber and name" required/>
                                            <div class="invalid-tooltip">
                                                Please provide a valid address.
                                            </div>
                                    </div>
                                    <div class="col-md-4 position-relative ">
                                        <label for="validationTooltip03" class="form-label">City<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" required/>
                                            <div class="invalid-tooltip">
                                                Please provide a valid city.
                                            </div>
                                    </div>
                                    <div class="col-md-4 position-relative ">
                                        <label for="validationTooltip04" class="form-label">Province<span class="text-danger" >*</span></label>
                                        <select class="form-select taxform" required>
                                            <option selected disabled placeholder="">Choose...</option>
                                            <option>Alberta</option>
                                            <option>British Columbia</option>
                                            <option>Manitoba</option>
                                            <option>New Brunswick</option>
                                            <option>Newfoundland and Labrador</option>
                                            <option>Nova Scotia</option>
                                            <option>Nunavut</option>
                                            <option>Ontario</option>
                                            <option>Prince Edward Island</option>
                                            <option>Quebec</option>
                                            <option>Saskatchewan</option>
                                            <option>Yukon</option>
                                        </select>
                                        <div class="invalid-tooltip">
                                            Please select a valid state.
                                        </div>
                                    </div>
                                    <div class="col-md-4 position-relative ">
                                        <label for="validationTooltip05" class="form-label">Zip<span class="text-danger" >*</span></label>
                                        <input type="text" class="form-control taxform" required/>
                                            <div class="invalid-tooltip">
                                                Please provide a valid zip.
                                            </div>
                                    </div>
                                    <div class="col-md-4 position-relative">
                                        <label for="validationCustom04" class="form-label">Marital Status<span class="text-danger" >*</span></label>
                                        <select class="form-select taxform" required>
                                            <option selected disabled placeholder="">Choose...</option>
                                            <option>Single</option>
                                            <option>Married</option>
                                            <option>Living common law</option>
                                            <option>Separated</option>
                                            <option>Divorced</option>
                                            <option>Widowed</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid statu.
                                        </div>
                                    </div>
                                    <div class="col-md-4 position-relative">
                                        <label for="validationCustom04" class="form-label">First time tax filling in CA?<span class="text-danger" >*</span></label>
                                        <select class="form-select taxform" required>
                                            <option selected disabled placeholder="">Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid statu.
                                        </div>
                                    </div>
                                    <div class="col-md-4 position-relative">
                                        <label for="validationCustomUsername" class="form-label">Are you a Canadian Citizen?<span class="text-danger" >*</span></label>
                                        <select class="form-select taxform" required>
                                            <option selected disabled placeholder="">Choose...</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid statu.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 position-relative">
                                    <label for="validationCustomUsername" class="form-label">Existing client?<span class="text-danger" >*</span></label>
                                    <select class="form-select taxform" required>
                                        <option selected disabled placeholder="">Choose...</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid statu.
                                    </div>
                                    </div>
                                    
                                    </div>
                        </form>
                    
                    </div>
            </form>
        </section>
        </>
  )
}

export default TaxOnline