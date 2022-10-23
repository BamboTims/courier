import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/custombutton/custombutton.component";
import FormInput from "../../components/forminput/forminput.component";
import Faq from "../../components/faq/faq.component";
import { ReactComponent as Truck } from "../../asset/delivery-svgrepo-com.svg";
import { ReactComponent as Box } from "../../asset/package-svgrepo-com.svg";
import { ReactComponent as Map } from "../../asset/map-svgrepo-com.svg";
import { ReactComponent as Hamburger } from "../../asset/hamburger-menu-svgrepo-com.svg";
import Delivery from "../../asset/rosebox-BFdSCxmqvYc-unsplash.jpg";
import Airplane from "../../asset/kevin-woblick-UdUbSPwbv2c-unsplash.jpg";
import Road from "../../asset/maksym-tymchyk-jm70AzcV5AQ-unsplash.jpg";
import Boat from "../../asset/venti-views-1cqIcrWFQBI-unsplash.jpg";
import Sidenav from "../../components/sidenav/sidenav.components";
import "./main.styles.css";

const MainPage = () => {
  const [hide, toggleHide] = useState("hide");
  return (
    <>
      <header id="home" className="header">
        <nav className="nav">
          <div className="nav-logo">Jet Express</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
          <div className="nav-user">
            <Link to="/dashboard">
              <CustomButton>Get Started</CustomButton>
            </Link>
          </div>
          <div
            className="nav-side"
            onClick={() =>
              hide === "hide" ? toggleHide("show") : toggleHide("hide")
            }
          >
            <Hamburger />
          </div>
        </nav>

        <div className="header-text">
          <h2>Fastest, Safest and best delivery for your goods</h2>
          <p>
            Your package and our passion, a combination that can never go wrong
          </p>
        </div>
        <div className="header-track">
          <FormInput type="text" placeholder="Track your package" search />
          <CustomButton>Track</CustomButton>
        </div>
        <div className="header-footer">
          <div>
            <p>2500+</p>
            <span>People trust us</span>
          </div>
          <div>
            <p>35K+</p>
            <span>Successful delivery</span>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="section">
          <div className="section-heading">
            <h3 id="about">About Us</h3>
            <div className="section-description">
              <div>
                <img src={Delivery} alt="Delivery" />
              </div>
              <div>
                We are a package delivery service company since 1980. We have
                delivered thousands of packages for customers safely and
                securely. Our services extend worldwide majorly in Africa. We
                continue to make improvements and ensure better customer
                satisfaction.
                <CustomButton>Read More</CustomButton>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-heading">
            <h3>Delivery Methods</h3>
            <p>
              We try as much as possible to be available to as many countries as
              possible.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src={Road} alt="Delivery by road" />
              <span>Road route</span>
            </div>
            <div className="card">
              <img src={Airplane} alt="Delivery by road" />
              <span>Air route</span>
            </div>
            <div className="card">
              <img src={Boat} alt="Delivery by road" />
              <span>Sea route</span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-heading">
            <h3 id="services">What do you get with us?</h3>
            <p>
              As a business owner or an individual, Our services are crucial in
              your day-to-day activities.
            </p>
          </div>
          <div className="cards">
            <div className="card util-pad">
              <Truck />
              <h4>Fast Delivery</h4>
              <p>
                Speedy deliveries are our greatest priority. Our customers
                Satisfaction is of utmost importance{" "}
              </p>
            </div>
            <div className="card util-pad">
              <Box />
              <h4>Safe Package</h4>
              <p>
                Your Parcels and Cargos are in great hands. Extra security
                guaranteed. 👍{" "}
              </p>
            </div>
            <div className="card util-pad">
              <Map />
              <h4>Package Tracking</h4>
              <p>
                You need to know the whereabouts of your package? We offer
                precise shipment tracking to put you at ease.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-heading">
            <h3 id="faq">Frequently Asked Questions</h3>
          </div>
          <div className="section-faqs">
            <Faq
              quest="What is Overseas Shipping?"
              ans="Overseas Shipping is a Jet Express solution that allows you to import and export items from any of your favourite stores"
            />
            <Faq
              quest="What is the delivery timeline"
              ans="1-3 business days (under the right conditions, depending on the zone and region in the country) Same day delivery is availbale in some regions"
            />
            <Faq
              quest="What is the timeline for pickup?"
              ans="This is decided between you and the allocated rider for your package"
            />
            <Faq
              quest="What is Overseas Shipping?"
              ans="Overseas Shipping is a Jet Express solution that allows you to import and export items from any of your favourite stores"
            />
            <Faq
              quest="What happens if the rider cancels my request?"
              ans="Pick-up will be assigned to another available rider"
            />
            <Faq
              quest="Is JET EXPRESS available 24/7?"
              ans="Yes, it is. However, pick-up request will be assigned to a rider between 6am - 6pm. Any request made after 6pm will be put on the priority queue and assigned the nex day"
            />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div>
          <h5>&#169;{`${new Date().getFullYear()} JET EXPRESS `}</h5>
        </div>
        <div>
          <h5>Company</h5>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Connect with Us!</h5>
        </div>
      </footer>
      <Sidenav hide={hide} toggle={toggleHide} />
    </>
  );
};

export default MainPage;
