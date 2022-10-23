import React from "react";
import FormInput from "../../components/forminput/forminput.component";
import CustomButton from "../../components/custombutton/custombutton.component";
import "./booking.styles.css";

const Booking = () => {
  return (
    <section className="dashboard-">
      <h3 className="center">Order a shipment</h3>
      <form className="form">
        <FormInput
          type="text"
          placeholder="Enter full name ..."
          label="Full Name :"
        />
        <FormInput
          type="email"
          placeholder="Enter email address"
          label="Email :"
        />
        <FormInput
          type="tel"
          placeholder="Enter phone number"
          label="Phone number :"
        />
        <CustomButton>Submit</CustomButton>
      </form>
    </section>
  );
};

export default Booking;
