import React from 'react'

const UploadFile = () => {
  return (
    <section>
    <form action="#" className="form-horizontal" >
      <div className="container">
        <h2 className="large">
          <b><strong>Upload files</strong></b>
        </h2>
        <h3 className="small">
            <b>
              Size of each file should be less 5Mbytes.
            File name should be less than 60 characters. File name should NOT include special characters.
            </b>
        </h3>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" id="file" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" />
        </div>
      </div>
    </form>
    <form action="#" className="form-horizontal" >
        <div className="container">
          <h2 className="large">
            <b><strong>Terms and conditions/</strong></b>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <textarea className="container-fluid form-control" id="disabledInput" type="text" placeholder="Here are conditions and terms below." disabled></textarea>
            </div>
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label className="form-check-label" htmlFor="invalidCheck">
            Click to agree terms and conditions above.
          </label>
          </div>
        </div>
        <div className="col-md-12" align ="center">
          <button className="btn btn-primary" type="file"
                                  disabled={true}
             >Submit form</button>
        </div>
      </form>
  </section>

  )
}

export default UploadFile