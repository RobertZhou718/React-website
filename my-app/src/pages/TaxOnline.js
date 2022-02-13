import React from 'react'

const TaxOnline = () => {
    return (
        <>
        <section class=" p-5 ">
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
        <section>
            <form  class="form-horizontal">
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
                    <form  class="form-horizontal" >
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 ">
                                    <label for="validationCustom01" class="form-label">First name<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" placeholder="Mark" required />
                                </div>
                                <div class="col-md-4 ">
                                    <label for="validationCustom02" class="form-label">Last name<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" placeholder="Otto" required />
                                </div>
                                <div class="col-md-4 ">
                                    <label for="validationCustomBirth" class="form-label">Date of Birth<span class="text-danger" >*</span></label>
                                    <div class="input-group has-validation">
                                        <input type="text" class="form-control taxform datepicker_input" id="datepicker1" placeholder="DD/MM/YYYY" aria-describedby="inputGroupPrepend" required />
                                    </div>
                                </div>
                                <div class="col-md-4 ">
                                    <label for="validationCustom01" class="form-label">SIN#<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" placeholder="9 digits" required />
                                </div>
                                <div class="col-md-4 ">
                                    <label for="validationCustom01" class="form-label">Email<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" placeholder="a@example.com" required />
                                </div>
                                <div class="col-md-4 ">
                                    <label for="validationCustom01" class="form-label">Phone<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" placeholder="11 digits" required />

                                </div>
                                <div class="col-md-12 position-relative ">
                                    <label for="validationTooltip05" class="form-label">Mailing Address<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" placeholder="UnitNumber, StreetNumber and name" required />
                                    <div class="invalid-tooltip">
                                        Please provide a valid address.
                                    </div>
                                </div>
                                <div class="col-md-4 position-relative ">
                                    <label for="validationTooltip03" class="form-label">City<span class="text-danger" >*</span></label>
                                    <input type="text" class="form-control taxform" required />
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
                                    <input type="text" class="form-control taxform" required />
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
        <section> 
  <form action="#" class="form-horizontal" >
    <div class="container">
      <h2 class="large">
        <b><strong>Property Details/(it only applies to Ontario address)</strong></b>
      </h2>

      <table class="table-striped table-hover" align="center">
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
                <input type="text" class="form-control" id="validationCustom02" placeholder="Toronto"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="5000"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
              </td>
              <td>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled placeholder="">Choose...</option>
                  <option>Student</option>
                  <option>Rental</option>
                  <option>Property Owner</option>
                  <option>Living with family</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Toronto"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="5000"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
              </td>
              <td>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled placeholder="">Choose...</option>
                  <option>Student</option>
                  <option>Rental</option>
                  <option>Property Owner</option>
                  <option>Living with family</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Toronto"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="5000"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
              </td>
              <td>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled placeholder="">Choose...</option>
                  <option>Student</option>
                  <option>Rental</option>
                  <option>Property Owner</option>
                  <option>Living with family</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Toronto"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="5000"/>
              </td>
              <td>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
              </td>
              <td>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled placeholder="">Choose...</option>
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
      </section>
      <hr/>

  <section> 
    <form action="#" class="form-horizontal" >
      <div class="container">
        <h2 class="large">
          <b><strong>Dependants List/(18 or less)</strong></b>
        </h2>

        <table class="table-striped table-hover" align="center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>SIN#</th>
              <th>Date of Birth</th>
            </tr>
            </thead>
          <tbody>
              <tr>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Lee"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="9 digits"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Lee"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="9 digits"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Mark"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="Lee"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="9 digits"/>
                </td>
                <td>
                  <input type="text" class="form-control" id="validationCustom02" placeholder="YYYY/MM/DD"/>
                </td>
              </tr>
          </tbody>
        </table>
        </div>
        </form>
      </section>
      <hr/>

<section> 
  <form action="#" class="form-horizontal" >
    <div class="container">
      <h2 class="large">
        <b><strong>Upload files</strong></b>
      </h2>
      <h3 class="small">
          <b>
            Size of each file should be less 5Mbytes. 
          File name should be less than 60 characters. File name should NOT include special characters.
          </b>
      </h3>
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="file" />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" />
      </div>
    </div>
  </form>
</section>
<hr/>

  <section> 
    <form action="#" class="form-horizontal" >
      <div class="container">
        <h2 class="large">
          <b><strong>Terms and conditions/</strong></b>
        </h2>
        <div class="row">
          <div class="col-md-12">
            <textarea class="container-fluid form-control" id="disabledInput" type="text" placeholder="Here are conditions and terms below." disabled></textarea>
          </div>
        </div>   
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
        <label class="form-check-label" for="invalidCheck">
          Click to agree terms and conditions above.
        </label>
        </div>
      </div>
      <div class="col-md-12" align ="center">
        <button class="btn btn-primary" type="file" id ="file">Submit form</button>
      </div>
    </form>
  </section>
  <hr/>
  <section class="p-5">
    <div class="container">
        <h2 class="text-center">Frequently Asked Questions</h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>
    </div>
</section>

        </>
    )
}

export default TaxOnline