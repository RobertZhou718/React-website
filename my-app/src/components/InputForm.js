import React from "react";

const InputForm = (props) => {
  return (
    <div className={props.formType}>
      {props.star ? (
        <label htmlFor="validationCustom01" className="form-label">
          {props.name}
          <span className="text-danger">{props.star}</span>
        </label>
      ) : (
        ""
      )}
      {props.options ? (
        <select
          name={props.name}
          defaultValue={"Choose..."}
          className="form-select"
          onChange={props.setValue}
          required
        >
          <option disabled placeholder="">
            Choose...
          </option>
          {props.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          name={props.name}
          type="text"
          onChange={props.setValue}
          className="form-control"
          placeholder={props.holder}
          required={props.required}
        />
      )}
      {props.invalid ? (
        <div className="invalid-tooltip">
          Please provide a valid {props.invalid}.
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputForm;
