import React from 'react';
import Login from '../login button/loginbutton.component';
import "./sidenav.styles.css";

const Sidenav = (props) => {
    const {hide, toggle} = props;
    return (
        <div className={`overlay ${hide}`} onClick={() => (hide === "hide")?toggle("show"):toggle("hide")}>
            <aside className="aside">
            <div className="aside-heading">
                <h3>JET EXPRESS</h3>
            </div>

            <ul className="aside-links">
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                    <li><a href='#about'>About Us</a></li>
            </ul>

            <div className="aside-footer">
                <Login/>
            </div>
            </aside>
        </div>
    )
}

export default Sidenav;