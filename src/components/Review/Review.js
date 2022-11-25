import React from 'react';
import { Container, Image } from 'react-bootstrap';
import reviewImg from '../../images/Frame 27.png';

const Review = () => {
    return (
        <Container>
        <div
          style={{ borderBottom: "2px dashed #FFAE5D", width: "100%" }}
          className="mb-2 text-start"
        >
          <h4>Review your purchase</h4>
        </div>
            <Image className='my-3' src={reviewImg} fluid />
        </Container>
    );
};

export default Review;