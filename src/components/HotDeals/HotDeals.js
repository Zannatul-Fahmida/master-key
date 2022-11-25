import React from 'react';
import { Container, Row } from 'react-bootstrap';
import items from '../../data/fakeApi.json';
import Deal from '../Deal/Deal';

const HotDeals = () => { 
  const hotItems = items.slice(6, 11);
    return (
        <Container>
        <div
          style={{ borderBottom: "2px dashed #FFAE5D", width: "100%" }}
          className="mb-2 text-start"
        >
          <h4>Today's hot deals</h4>
        </div>      
        <Row xs={1} md={5} className="g-3 mt-2">
        {hotItems.map((item) => (
          <Deal key={item._id} item={item} />
        ))}
      </Row>     
        </Container>
    );
};

export default HotDeals;