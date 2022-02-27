import { useState } from "react";
import InputForm from "./InputForm";
import objectToCSV from './objectToCSV';

const PropertDetails = () => {
  const { tbhead, formholder, formOptions,formObject } = getConfig();
  const [inputs, setInputs] = useState(formObject);
  const handleChange = e => setInputs(prevState => ({
    ...prevState, [e.target.name
    ]: e.target.value
  }));
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
                {tbhead.map((a) => <th>{a}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>

                    {tbhead.map((head =>      <td><InputForm
                      key={head}
                      name={head}
                      holder={formholder[head]}
                      value={inputs.head}
                      setValue={handleChange}
                      options={formOptions[head]}
                    /></td>))}

              </tr>
            </tbody>
          </table>
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
      'Residence Type': ['Choose...',
        'Student',
        'Rental',
        'Property Owner',
        'Living with family'
      ]
    };
    return { tbhead, formholder, formOptions,formObject };
  }
}

export default PropertDetails