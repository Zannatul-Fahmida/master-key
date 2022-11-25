import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Deals = () => {
  useEffect(() => {
    fetch("../../data/fakeApi.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div
        style={{ borderBottom: "2px dashed #FFAE5D", width: "100%" }}
        className="mb-2"
      >
        <h4>hot deals for you</h4>
      </div>
      <Row xs={1} md={3} className="g-2"></Row>
    </div>
  );
};

export default Deals;
