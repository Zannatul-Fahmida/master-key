import React from "react";
import { Container, Row } from "react-bootstrap";
import Deal from "../Deal/Deal";
import items from "../../data/fakeApi.json";

const Furniture = () => {
    const furniture = items.slice(11, 16);
  return (
    <Container>
      <div
        style={{ borderBottom: "2px dashed #FFAE5D", width: "100%" }}
        className="mb-2 text-start"
      >
        <h4>Deals on furniture</h4>
      </div>    
      <Row xs={1} md={5} className="g-3 mt-2">
      {furniture.map((item) => (
        <Deal key={item._id} item={item} />
      ))}
      </Row>
    </Container>
  );
};

export default Furniture;
