import React, {useState} from 'react';
import {ReactComponent as ChevDown} from "../../asset/chevron-down-svgrepo-com.svg";
import {ReactComponent as ChevUp} from "../../asset/chevron-up-svgrepo-com.svg";
import "./faq.styles.css";

const Faq = (props) => {
    const {quest, ans} = props;
    const [hide, toggleHide] = useState("hide");

    return(
        <div className='faq' onClick={() => (hide === "hide")?toggleHide("open"):toggleHide("hide")}>
            <div className="faq-quest">
                {quest}

                <div>
                {(hide === "hide")?<ChevDown/>:<ChevUp/>}
                </div>

            </div>
            <div className={`faq-ans ${hide}`}>
                {ans}
            </div>
        </div>
    )
}

export default Faq;