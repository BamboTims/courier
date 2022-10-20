import React from 'react';
import "./custombutton.styles.css";

const CustomButton = (props) => {
    const {children} = props;
    return(
        <button className='custombtn'>
            {children}
        </button>
)
}

export default CustomButton;