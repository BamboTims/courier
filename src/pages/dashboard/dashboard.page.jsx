import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactComponent as User } from '../../asset/user-svgrepo-com.svg';
import { ReactComponent as Redirect } from '../../asset/redirect-svgrepo-com.svg';
import { ReactComponent as Ship } from '../../asset/ship-svgrepo-com.svg';
import FormInput from "../../components/forminput/forminput.component";
import Login from "../../components/login button/loginbutton.component";
import History from '../../components/history/history.components';
import "./dashboard.styles.css";

const Dashboard = () => {
    const {user} = useAuth0();
    const date = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return(
        <section className="dashboard">
            <div className="dashboard-header">
                <div>
                <span className="sub">{date.getDate()} {month[date.getMonth()]}, {date.getFullYear()}</span>
                <span className="main">Hi {user?.name || "User"}!</span>
                </div>
                <div className="dashboard-header__img">
                    {(user)? <img src={user.picture} alt={user.name}/>:<User/> }
                </div>
                <div>
                    <Login/>
                </div>
            </div>
            <div className="dashboard-main">
                <div className="dashboard-track">
                    <h3>Track your Package</h3>
                    <p>Enter the package id number that has been given by the office</p>
                    <FormInput search type="text" placeholder="Enter package id"/>
                </div>

                <div className="dashboard-shipment">
                    <h3>Lets Get Started</h3>
                    <div className="cards">
                        <div className="card">
                                <Ship/>
                                Ship now
                        </div>
                        <div className="card">
                            <Redirect/>
                            Redirect Shipment
                        </div>
                    </div>
                </div>

                <div className="dashboard-history">
                    <h3>Tracking history</h3>
                    <History number="FGHI67R3E3" status="delivered"/>
                    <History number="FGHI67R3E3" status="confirmed"/>
                    <History number="FGHI67R3E3" status="enroute"/>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;