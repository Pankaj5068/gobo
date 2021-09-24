import React from "react";
import Loader from "react-loader-spinner";
// import Select from "react-select";

const inputs = {
  Input: ({ name, label, ...rest }) => {
    return (
      <div className="form-group icon_form comments_form">
        <i className={"fas fa-" + label}></i>
        <input {...rest} name={name} id={name} className="form-control" />
      </div>
    );
  },
  TextArea: ({ name, label, rows, ...rest }) => {
    return (
      <div className="form-group icon_form comments_form">
        <i className={"fas fa-" + label}></i>
        <textarea
          {...rest}
          name={name}
          id={name}
          rows={rows}
          className="form-control"
        />
      </div>
    );
  },
  CheckBox: ({ name, label, error, ...rest }) => {
    return (
      <div>
        <div className="login_remember_box">
          <label className="control control--checkbox">
            {label}
            <input {...rest} name={name} id={name} />
            <span className="control__indicator"></span>
          </label>
        </div>
      </div>
    );
  },
  Radio: ({ name, id, label, error, ...rest }) => {
    return (
      <div className="custom-control custom-radio custom-control-inline">
        <input {...rest} id={id} name={name} className="custom-control-input" />
        <label className="custom-control-label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  },
  Button: ({ label }) => {
    return (
      <div className="header_btn search_btn signin_btn jb_cover">
        <button type="submit">{label}</button>
      </div>
    );
  },
  Loader: () => {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={35}
        width={35}
        timeout={3000}
      />
    );
  },
  Select: ({ options }) => {
    return (
      <div className="select_box select_box3">
        <select>
          {options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <Select options={options} /> */}
      </div>
    );
  },
};

export default inputs;
