import React from 'react';
import {ReactComponent as Enroute} from "../../asset/delivery-svgrepo-com.svg";
import {ReactComponent as Confirmed} from "../../asset/confirm-svgrepo-com.svg";
import {ReactComponent as Delivered} from "../../asset/delivered-svgrepo-com.svg";
import {ReactComponent as ChevronRight} from "../../asset/chevron-right-svgrepo-com.svg";
import "./history.styles.css";

const History = (props) => {
    const {number, status} = props; 
    const icon = (status === "confirmed")?<Confirmed/>:(status === "enroute")?<Enroute/>:<Delivered/>

    return(
        <div className='history'>
            <div className={`history-icon ${status}`}>
                {icon}
            </div>
            <div className="history-info">
                <span className="history-main">{number}</span>
                <span className="history-sub">{`Order ${status}`}</span>
            </div>
            <div className='history-icon'>
                <ChevronRight/>
            </div>
        </div>
    )
}

export default History;