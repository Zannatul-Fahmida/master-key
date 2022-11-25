import React from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#404040", color: "#ffffff" }}
      className="d-flex justify-content-between p-5 align-items-center"
    >
      <div>
        <h3>
          shop<span className="fw-light">cart</span>
        </h3>
      </div>
      <div className="d-flex justify-content-between">
        <p>About</p>
        <p className="mx-2">Contact</p>
        <p>Help</p>
      </div>
      <div>
      <Form.Select className="border-0" style={{ backgroundColor: '#404040', color: '#ffffff'}}>
          <option>English</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Footer;
