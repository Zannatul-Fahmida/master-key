import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Deals from "../Deals/Deals";

const Banner = () => {
  return (
    <Container>
    <Row className="align-items-center">
      <Col md="4">
        <h1 style={{fontSize: '70px'}} className="fw-normal text-start">
          We picked some{" "}
          <span style={{ color: "#FFAE5D" }} className="fw-bold">
            cool things
          </span>
          for you!
        </h1>
      </Col>
      <Col md="8" className='text-start'>
        <Deals />
      </Col>
      </Row>
    </Container>
  );
};

export default Banner;
