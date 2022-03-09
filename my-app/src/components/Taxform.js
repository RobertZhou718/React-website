import React from "react";
import { useState } from "react";
import InputForm from "./InputForm";
import objectToCSV from "./objectToCSV";
import { Trans } from "@lingui/macro";

const Taxform = ({ user }) => {
  const {
    taxFormHead,
    invalid,
    holder,
    starValue,
    options,
    formHead,
  } = getConfig();
  const [inputs, setInputs] = useState(formHead);
  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      objectToCSV(taxFormHead, [inputs], e.target.name + ".csv", user.email);
    } else {
      alert("Log in first");
    }
  };
  return (
    <section>
      <div className="form-horizontal">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <span
                className="medium"
                style={{ backgroundColor: "blanchedalmond" }}
              >
                <Trans>
                  Due to the high volume of customers, our current process time
                  will be:
                </Trans>
                <b>
                  <strong>
                    <Trans>1 DAY</Trans>
                  </strong>
                </b>
              </span>
            </div>
          </div>
          <h2 className="large">
            <b>
              <strong>
                <Trans>Tax Form</Trans>
              </strong>
            </b>
          </h2>
          <form className="form-horizontal">
            <div className="container-fluid">
              <div className="row">
                {taxFormHead.map((head) => (
                  <InputForm
                    formType={"col-md-4"}
                    key={head}
                    name={head}
                    invalid={invalid[head]}
                    holder={holder[head]}
                    value={inputs.head}
                    setValue={handleChange}
                    star={starValue[head]}
                    required={true}
                    options={options[head]}
                  />
                ))}
              </div>
            </div>
            <br />
            <div className="col-md-12" align="center">
              <button
                className="btn btn-primary"
                type="submit"
                name="Tax Form"
                onClick={handleSubmit}
                disabled={Object.values(inputs).some((value) => {
                  if (value === null) {
                    return true;
                  }
                  return false;
                })}
              >
                <Trans> Submit form</Trans>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Taxform;

function getConfig() {
  const formHead = {
    "First name": null,
    "Last name": null,
    "Date of Birth": null,
    "SIN#": null,
    Email: null,
    Phone: null,
    "Mailing Address": null,
    City: null,
    Province: null,
    Zip: null,
    "Marital Status": null,
    "First time tax filling in CA?": null,
    "Are you a Canadian Citizen": null,
    "Existing client": null,
  };
  const taxFormHead = [
    "First name",
    "Last name",
    "Date of Birth",
    "SIN#",
    "Email",
    "Phone",
    "Mailing Address",
    "City",
    "Province",
    "Zip",
    "Marital Status",
    "First time tax filling in CA?",
    "Are you a Canadian Citizen",
    "Existing client",
  ];
  const starValue = {
    "First name": "*",
    "Last name": "*",
    "Date of Birth": "*",
    "SIN#": "*",
    Email: "*",
    Phone: "*",
    "Mailing Address": "*",
    City: "*",
    Province: "*",
    Zip: "*",
    "Marital Status": "*",
    "First time tax filling in CA?": "*",
    "Are you a Canadian Citizen": "*",
    "Existing client": "*",
  };
  const holder = {
    "First name": "Mark",
    "Last name": "Tott",
    "Date of Birth": "2000-01-01",
    "SIN#": "9 digtals",
    Email: "example@example.com",
    Phone: "604-1234-4567",
    "Mailing Address": "UnitNumber, StreetNumber and name",
    City: "Toronto",
    Province: "Choose",
    Zip: "A0A 0A0",
    "Marital Status": "Choose",
    "First time tax filling in CA?": "Choose",
    "Are you a Canadian Citizen": "Choose",
    "Existing client": "Choose",
  };
  const invalid = {
    "First name": null,
    "Last name": null,
    "Date of Birth": null,
    "SIN#": null,
    Email: null,
    Phone: null,
    "Mailing Address": "address",
    City: "city",
    Province: null,
    Zip: null,
    "Marital Status": "state",
    "First time tax filling in CA?": "state",
    "Are you a Canadian Citizen": "state",
    "Existing client": "state",
  };
  const province = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];
  const marital = [
    "Single",
    "Married",
    "Living common law",
    "Separated",
    "Divorced",
    "Widowed",
  ];
  const binaryOption = ["Yes", "No"];
  const options = {
    "First name": null,
    "Last name": null,
    "Date of Birth": null,
    "SIN#": null,
    Email: null,
    Phone: null,
    "Mailing Address": null,
    City: null,
    Province: province,
    Zip: null,
    "Marital Status": marital,
    "First time tax filling in CA?": binaryOption,
    "Are you a Canadian Citizen": binaryOption,
    "Existing client": binaryOption,
  };
  return { taxFormHead, invalid, holder, starValue, options, formHead };
}
