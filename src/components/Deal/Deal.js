import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { BiRupee } from "react-icons/bi";

const Deal = ({item}) => {
    const { name, picture, price, discount} = item;
    return (
        <Col>
        <Card className='h-100 border-0'>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className='d-flex justify-content-between'>
              <p><BiRupee />{price}</p>
              <p className='text-danger'>-{discount}% off</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Deal;