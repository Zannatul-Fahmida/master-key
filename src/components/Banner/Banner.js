import React from "react";
import { Container } from "react-bootstrap";
import Deals from "../Deals/Deals";

const Banner = () => {
  return (
    <Container className='d-flex flex-column flex-md-row align-items-center'>
      <div>
        <h1 style={{fontSize: '70px'}} className="fw-normal text-start">
          We picked some{" "}
          <span style={{ color: "#FFAE5D" }} className="fw-bold">
            cool things
          </span>{" "}
          for you!
        </h1>
      </div>
      <div className='w-100 text-start'>
        <Deals />
      </div>
    </Container>
  );
};

export default Banner;
