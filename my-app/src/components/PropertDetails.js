import React, { useState } from "react";
import InputForm from "./InputForm";
import objectToCSV from './objectToCSV';


const PropertDetails =  ({ user }) => {
  const { tbhead, formholder, formOptions, formObject } = getConfig();
  const [recodes, setRecodes] = useState([formObject]);
  const handleChange = recordindex => e => {
    console.log('index: ' + recordindex);
    console.log('property name: ' + e.target.name);
    let newArr = [...recodes]; // copying the old datas array
    newArr[recordindex][e.target.name] = e.target.value; // replace e.target.value with whatever you want to change it to
    setRecodes(newArr);
  }
  const addRecord = e => {
    e.preventDefault();
    setRecodes([...recodes, formObject]);
  }
  const delRecord = recordindex => e => {
    console.log('index: ' + recordindex);
    console.log('property name: ' + e.target.name);
    e.preventDefault();
    let newArr = [...recodes];
    newArr.splice(recordindex, 1);
    setRecodes(newArr);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (user) {
        objectToCSV(tbhead, [recodes], e.target.name + ".csv", user.email);
    } else {
        alert("Log in first")
    }
}
  return (
    <section>
      <form className="form-horizontal" >
        <div className="container">
          <h2 className="large">
            <b><strong>Property Details/(it only applies to Ontario address)</strong></b>
          </h2>
          <table className="table-striped table-hover" align="center">
            <thead>
              <tr>
                {tbhead.map((a, i) => <th key={i}>{a}</th>)}
              </tr>
            </thead>
            <tbody>
              {recodes.map((recodes, recordindex) =>
                <tr key={recordindex}>
                  {tbhead.map((head) =>
                    <td key={head}>
                      <InputForm
                        name={head}
                        holder={formholder[head]}
                        value={recodes.head}
                        setValue={handleChange(recordindex)}
                        options={formOptions[head]}
                      />
                    </td>
                  )}
                  <td>
                    {recordindex === 0 ?
                      <button className="btn btn-primary" onClick={addRecord}>Add</button> : <button className="btn btn-primary" onClick={delRecord(recordindex)}>Delet</button>}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-12" align="center">
                            <button className="btn btn-primary" type="submit"
                                name='Propert Details'
                                onClick={handleSubmit}
                                disabled={Object.values(...recodes).some(value => {
                                    if (value === null) {
                                        return true;
                                    }
                                    return false;
                                })}
                            >Submit form</button>

                        </div>
      </form>
    </section>)

  function getConfig() {
    const tbhead = ['Mailing Address',
      'Moving in',
      'Rental paid/Property tax',
      'Landlord name',
      'Residence Type'];
    const formObject = {
      'Mailing Address': null,
      'Moving in': null,
      'Rental paid/Property tax': null,
      'Landlord name': null,
      'Residence Type': null
    };
    const formholder = {
      'Mailing Address': "Toronto",
      'Moving in': "YYYY/MM/DD",
      'Rental paid/Property tax': "5000",
      'Landlord name': "Mark",
      'Residence Type': "Choose..."
    };
    const formOptions = {
      'Mailing Address': null,
      'Moving in': null,
      'Rental paid/Property tax': null,
      'Landlord name': null,
      'Residence Type': [
        'Student',
        'Rental',
        'Property Owner',
        'Living with family'
      ]
    };
    return { tbhead, formholder, formOptions, formObject };
  }
}

export default PropertDetails