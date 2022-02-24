import React from 'react'
import { useState } from "react";
import InputForm from "./InputForm";

const Taxform = () => {
    const inputformHead = ["First name","Last name","Date of Birth","SIN#","Email","Phone","Mailing Address","City","Province","Zip","Marital Status","First time tax filling in CA?","Are you a Canadian Citizen","Existing client"]
    const starValue = {"First name":"*"
    ,"Last name":"*"
    ,"Date of Birth":"*"
    ,"SIN#":"*"
    ,"Email":"*"
    ,"Phone":"*"
    ,"Mailing Address":"*"
    ,"City":"*"
    ,"Province":"*"
    ,"Zip":"*"
    ,"Marital Status":"*"
    ,"First time tax filling in CA?":"*"
    ,"Are you a Canadian Citizen":"*"
    ,"Existing client":"*"};
    const holder = {"First name":"Mark"
    ,"Last name":"Tott"
    ,"Date of Birth":"2000-01-01"
    ,"SIN#":"9 digtals"
    ,"Email":"example@example.com"
    ,"Phone":"604-1234-4567"
    ,"Mailing Address":"Street"
    ,"City":"Toronto"
    ,"Province":"Choose"
    ,"Zip":"A0A 0A0"
    ,"Marital Status":"Choose"
    ,"First time tax filling in CA?":"Choose"
    ,"Are you a Canadian Citizen":"Choose"
    ,"Existing client":"Choose"}
    const [inputs, setInputs] = useState({});
    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

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
                    {inputformHead.map((head=><InputForm name={head} holder={holder[head]} value={inputs.head} setValue={handleChange} star={starValue[head]} required={true}/>))}


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