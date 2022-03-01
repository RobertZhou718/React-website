import { useState } from "react";
import InputForm from "./InputForm";
import objectToCSV from './objectToCSV';

const DependentList =  ({ user }) => {

  const { tbhead, formholder, formObject } = getConfig();
  const [recodes, setRecodes] = useState([formObject]);
  const handleChange = recordindex => e => {
    console.log('index: ' + recordindex);
    console.log('property name: ' + e.target.name);
    let newArr = [...recodes]; // copying the old datas array
    newArr[recordindex][e.target.name] = e.target.value; // replace e.target.value with whatever you want to change it to
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

  return (
    <section>
      <form className="form-horizontal" >
        <div className="container">
          <h2 className="large">
            <b><strong>Dependants List/(18 or less)</strong></b>
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
                                name='Dependent List'
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
}

export default DependentList

function getConfig() {

  const tbhead = ['First Name'
    , 'Last Name'
    , 'SIN#'
    , 'Date of Birth'];

  const formObject = {
    'First Name': null,
    'Last Name': null,
    'SIN#': null,
    'Date of Birth': null,
  };
  const formholder = {
    'First Name': "Mark",
    'Last Name': "Lee",
    'SIN#': "9 digits",
    'Date of Birth': "YYYY/MM/DD",
  };

  return { tbhead, formholder, formObject };
}
