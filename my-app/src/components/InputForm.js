import React from 'react'

const InputForm = (props) => {
    return (
        <div className="col-md-4 ">
            <label htmlFor="validationCustom01" className="form-label">{props.name}
                <span className="text-danger" >{props.star}</span></label>
            <input type="text" onChange={props.setValue}
            className="form-control taxform"
            placeholder={props.holder}
            required={props.required}/>
        </div>
    )
}

export default InputForm