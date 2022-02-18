import React from 'react'

const Taxform = () => {
  return (
    <section>
    <div  className="form-horizontal">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <span className="medium" style={{backgroundColor: 'blanchedalmond'}} >
                        Due to the high volume of customers, our current process time will be: <b><strong>1 DAY</strong></b>
                    </span>
                </div>
            </div>
            <h2 className="large">
                <b><strong>Tax Form</strong></b>
            </h2>
            <form  className="form-horizontal" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 ">
                            <label htmlFor="validationCustom01" className="form-label">First name<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" placeholder="Mark" required />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor="validationCustom02" className="form-label">Last name<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" placeholder="Otto" required />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor="validationCustomBirth" className="form-label">Date of Birth<span className="text-danger" >*</span></label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control taxform datepicker_input" id="datepicker1" placeholder="DD/MM/YYYY" aria-describedby="inputGroupPrepend" required />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor="validationCustom01" className="form-label">SIN#<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" placeholder="9 digits" required />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor="validationCustom01" className="form-label">Email<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" placeholder="a@example.com" required />
                        </div>
                        <div className="col-md-4 ">
                            <label htmlFor="validationCustom01" className="form-label">Phone<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" placeholder="11 digits" required />

                        </div>
                        <div className="col-md-12 position-relative ">
                            <label  className="form-label">Mailing Address<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" placeholder="UnitNumber, StreetNumber and name" required />
                            <div className="invalid-tooltip">
                                Please provide a valid address.
                            </div>
                        </div>
                        <div className="col-md-4 position-relative ">
                            <label  className="form-label">City<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" required />
                            <div className="invalid-tooltip">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-4 position-relative ">
                            <label  className="form-label">Province<span className="text-danger" >*</span></label>
                            <select defaultValue={"Choose..."} className="form-select taxform" required>
                                <option disabled placeholder="">Choose...</option>
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
                            <div className="invalid-tooltip">
                                Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-4 position-relative ">
                            <label  className="form-label">Zip<span className="text-danger" >*</span></label>
                            <input type="text" className="form-control taxform" required />
                            <div className="invalid-tooltip">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="validationCustom04" className="form-label">Marital Status<span className="text-danger" >*</span></label>
                            <select defaultValue={"Choose..."} className="form-select taxform" required>
                                <option disabled placeholder="">Choose...</option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Living common law</option>
                                <option>Separated</option>
                                <option>Divorced</option>
                                <option>Widowed</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid statu.
                            </div>
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="validationCustom04" className="form-label">First time tax filling in CA?<span className="text-danger" >*</span></label>
                            <select defaultValue={"Choose..."} className="form-select taxform" required>
                                <option disabled placeholder="">Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid statu.
                            </div>
                        </div>
                        <div className="col-md-4 position-relative">
                            <label htmlFor="validationCustomUsername" className="form-label">Are you a Canadian Citizen?<span className="text-danger" >*</span></label>
                            <select defaultValue={"Choose..."} className="form-select taxform" required>
                                <option disabled placeholder="">Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid statu.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <label htmlFor="validationCustomUsername" className="form-label">Existing client?<span className="text-danger" >*</span></label>
                        <select defaultValue={"Choose..."} className="form-select taxform" required>
                            <option disabled placeholder="">Choose...</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid statu.
                        </div>
                    </div>

                </div>
            </form>

        </div>
    </div>
</section>  )
}

export default Taxform