import React from 'react';
import "./forminput.styles.css";
import { ReactComponent as Search } from "../../asset/search-svgrepo-com.svg";

const FormInput = (props) => {
    const {type, placeholder, search} = props;

    return(
        <div className="field">
            <input className="forminput" type={type} placeholder={placeholder} />
            {(search)?<Search/>:null}
        </div>
    
    )
}

export default FormInput;