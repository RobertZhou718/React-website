import { useState } from "react";
import InputForm from "./InputForm";
import objectToCSV from './objectToCSV';

const DependentList = () => {
  const tbhead = ['First Name'
  ,'Last Name'
  ,'SIN#'
  ,'Date of Birth'];


  const [inputs, setInputs] = useState({});

  return (
    <section>
    <form  className="form-horizontal" >
      <div className="container">
        <h2 className="large">
          <b><strong>Dependants List/(18 or less)</strong></b>
        </h2>
        <table className="table-striped table-hover" align="center">
          <thead>
            <tr>
            {tbhead.map((a)=><th>{a}</th>)}
            </tr>
            </thead>
          <tbody>
              <tr>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Lee"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="9 digits"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
              </tr>


          </tbody>
        </table>
        </div>
        </form>
      </section>  )
}

export default DependentList