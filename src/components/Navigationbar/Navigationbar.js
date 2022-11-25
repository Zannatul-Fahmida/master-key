import React from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Navigationbar = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand href="#home">
          <span className="fw-bold">Shop</span>cart
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex text-dark align-items-center">
            <FaUserCircle /> Sign in
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <hr />
      <Navbar>
        <Button
          style={{ backgroundColor: "#FFAE5D" }}
          className="border-0 text-dark"
        >
          <GrLocation />
          Dhaka, 1212
        </Button>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form.Control className="w-50" type="text" placeholder="Search" />
        </Navbar.Collapse>
      </Navbar>
      <div className="d-flex justify-content-between text-secondary">
        <p>Fresh</p>
        <p>Today's Deals</p>
        <p>Mobiles</p>
        <p>Gift Cards</p>
        <p>Women Clothing</p>
        <p>Men Clothing</p>
        <p>Kids Clothing</p>
        <p>Health</p>
        <p>Pet Corner</p>
        <p>Books</p>
        <p>Beauty</p>
        <p>Kitchen</p>
        <p>Bed Room</p>
        <p>Sport</p>
        <p>Bags</p>
      </div>
    </Container>
  );
};

export default Navigationbar;
