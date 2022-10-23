import React from "react";
import "./forminput.styles.css";
import { ReactComponent as Search } from "../../asset/search-svgrepo-com.svg";

const FormInput = (props) => {
  const { type, placeholder, search, label } = props;

  return (
    <div className="field">
      {label ? <label htmlFor={type}>{label}</label> : null}
      <input
        className="forminput"
        type={type}
        placeholder={placeholder}
        id={type}
      />
      {search ? <Search /> : null}
    </div>
  );
};

export default FormInput;
