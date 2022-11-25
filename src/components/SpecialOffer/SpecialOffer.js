import React from 'react';
import { Container, Image } from 'react-bootstrap';
import offerImg1 from '../../images/Rectangle 3.png';
import offerImg2 from '../../images/Group 4.png';

const SpecialOffer = () => {
    return (
        <Container className='my-2'>
            <Image src={offerImg1} fluid />
        </Container>
    );
};

export default SpecialOffer;