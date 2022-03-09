import { useState } from "react";
import InputForm from "./InputForm";
import objectToCSV from "./objectToCSV";
import { Trans } from "@lingui/macro";

const DependentList = ({ user }) => {
  const { tbhead, formholder, formObject } = getConfig();
  const [recodes, setRecodes] = useState([formObject]);
  const handleChange = (recordindex) => (e) => {
    console.log("index: " + recordindex);
    console.log("property name: " + e.target.name);
    let newArr = [...recodes]; // copying the old datas array
    newArr[recordindex][e.target.name] = e.target.value; // replace e.target.value with whatever you want to change it to
    setRecodes(newArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      objectToCSV(tbhead, recodes, e.target.name + ".csv", user.email);
      alert("Success");
    } else {
      alert("Log in first");
    }
  };
  const addRecord = (e) => {
    e.preventDefault();
    setRecodes([...recodes, formObject]);
  };
  const delRecord = (recordindex) => (e) => {
    console.log("index: " + recordindex);
    console.log("property name: " + e.target.name);
    e.preventDefault();
    let newArr = [...recodes];
    newArr.splice(recordindex, 1);
    setRecodes(newArr);
  };

  return (
    <section>
      <form className="form-horizontal">
        <div className="container">
          <h2 className="large">
            <b>
              <strong>
                <Trans>Dependants List/(18 or less)</Trans>
              </strong>
            </b>
          </h2>
          <table className="table-striped table-hover" align="center">
            <thead>
              <tr>
                {tbhead.map((a, i) => (
                  <th key={i}>{a}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recodes.map((recodes, recordindex) => (
                <tr key={recordindex}>
                  {tbhead.map((head) => (
                    <td key={head}>
                      <InputForm
                        name={head}
                        holder={formholder[head]}
                        value={recodes.head}
                        setValue={handleChange(recordindex)}
                      />
                    </td>
                  ))}
                  <td>
                    {recordindex === 0 ? (
                      <button className="btn btn-primary" onClick={addRecord}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={delRecord(recordindex)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-12" align="center">
          <button
            className="btn btn-primary mt-3"
            type="submit"
            name="Dependent List"
            onClick={handleSubmit}
            disabled={Object.values(...recodes).some((value) => {
              if (value === null) {
                return true;
              }
              return false;
            })}
          >
            <Trans>Submit form</Trans>
          </button>
        </div>
      </form>
    </section>
  );
};

export default DependentList;

function getConfig() {
  const tbhead = ["First Name", "Last Name", "SIN#", "Date of Birth"];

  const formObject = {
    "First Name": null,
    "Last Name": null,
    "SIN#": null,
    "Date of Birth": null,
  };
  const formholder = {
    "First Name": "Mark",
    "Last Name": "Lee",
    "SIN#": "9 digits",
    "Date of Birth": "YYYY/MM/DD",
  };

  return { tbhead, formholder, formObject };
}
