import React from "react";
import { Container, Image } from "react-bootstrap";
import searchImage from "../../images/Frame 19.png";

const SearchedItems = () => {
  return (
    <Container>
      <div
        style={{ borderBottom: "2px dashed #FFAE5D", width: "100%" }}
        className="mb-2 text-start"
      >
        <h4>Your searched items</h4>
      </div>
      <Image className="my-3" src={searchImage} fluid />
    </Container>
  );
};

export default SearchedItems;
