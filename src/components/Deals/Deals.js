import React from "react";
import { Row } from "react-bootstrap";
import items from "../../data/fakeApi.json";
import Deal from "../Deal/Deal";

const Deals = () => {
  const dealItems = items.slice(0, 6);
  return (
    <div>
      <div
        style={{ borderBottom: "2px dashed #FFAE5D", width: "100%" }}
        className="mb-2"
      >
        <h4>hot deals for you</h4>
      </div>
      <Row xs={1} md={3} className="g-2">
        {dealItems.map((item) => (
          <Deal key={item._id} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default Deals;
