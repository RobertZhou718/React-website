import React, { useState } from "react";
import { storage } from "../config";
import { ref, uploadBytes } from "firebase/storage";

function uploadfile(inputfiles, useEmail) {
  inputfiles.forEach((file) => {
    if (file) {
      const filename = file.name;
      const storageRef = ref(storage, useEmail + "/" + filename);
      console.log(file.name);
      uploadBytes(storageRef, file).then((snapshot) => {
        alert("Submit Success!");
      });
    }
  });
}

const FileInput = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        Default file input example
      </label>
      <input
        name={props.name}
        className="form-control"
        onChange={props.handleChange}
        type="file"
      />
    </div>
  );
};
const UploadFile = ({ user }) => {
  const fileList = ["file0", "file1", "file2", "file3"];
  const [files, setFiles] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      uploadfile(files, user.email);
    } else {
      alert("Log in first");
    }
  };
  const handleChange = (e) => {
    setFiles([...files, e.target.files[0]]);
  };
  return (
    <section>
      <form action="#" className="form-horizontal">
        <div className="container">
          <h2 className="large">
            <b>
              <strong>Upload files</strong>
            </b>
          </h2>
          <h3 className="small">
            <b>
              Size of each file should be less 5Mbytes. File name should be less
              than 60 characters. File name should NOT include special
              characters.
            </b>
          </h3>
          {fileList.map((fileindex) => (
            <FileInput
              key={fileindex}
              name={fileindex}
              handleChange={handleChange}
            />
          ))}
        </div>
      </form>
      <form action="#" className="form-horizontal">
        <div className="container">
          <h2 className="large">
            <b>
              <strong>Terms and conditions</strong>
            </b>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <textarea
                className="container-fluid form-control"
                id="disabledInput"
                type="text"
                placeholder="Here are conditions and terms below."
                disabled
              ></textarea>
            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Click to agree terms and conditions above.
            </label>
          </div>
        </div>
        <div className="col-md-12" align="center">
          <button
            className="btn btn-primary"
            type="file"
            disabled={Object.values(files).every((value) => {
              if (value === null) {
                return true;
              }
              return false;
            })}
            onClick={handleSubmit}
          >
            Submit form
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadFile;
