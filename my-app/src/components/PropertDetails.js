import React from 'react'

const PropertDetails = () => {
  return (
    <section>
    <form action="#" className="form-horizontal" >
      <div className="container">
        <h2 className="large">
          <b><strong>Property Details/(it only applies to Ontario address)</strong></b>
        </h2>

        <table className="table-striped table-hover" align="center">
          <thead>
            <tr>
              <th>Mailing Address</th>
              <th>Moving in</th>
              <th>Rental paid/Property tax</th>
              <th>Landlord name</th>
              <th>Residence Type</th>
            </tr>
            </thead>
          <tbody>
              <tr>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Toronto"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="5000"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <select defaultValue={"Choose..."} className="form-select" id="validationCustom04" required>
                    <option disabled placeholder="">Choose...</option>
                    <option>Student</option>
                    <option>Rental</option>
                    <option>Property Owner</option>
                    <option>Living with family</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Toronto"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="5000"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <select defaultValue={"Choose..."} className="form-select" id="validationCustom04" required>
                    <option disabled placeholder="">Choose...</option>
                    <option>Student</option>
                    <option>Rental</option>
                    <option>Property Owner</option>
                    <option>Living with family</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Toronto"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="5000"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <select defaultValue={"Choose..."} className="form-select" id="validationCustom04" required>
                    <option disabled placeholder="">Choose...</option>
                    <option>Student</option>
                    <option>Rental</option>
                    <option>Property Owner</option>
                    <option>Living with family</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Toronto"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="5000"/>
                </td>
                <td>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <select defaultValue={"Choose..."} className="form-select" id="validationCustom04" required>
                    <option disabled placeholder="">Choose...</option>
                    <option>Student</option>
                    <option>Rental</option>
                    <option>Property Owner</option>
                    <option>Living with family</option>
                  </select>
                </td>
              </tr>
          </tbody>
        </table>
        </div>
        </form>
        </section>  )
}

export default PropertDetails