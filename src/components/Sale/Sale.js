import React from 'react';
import { Container, Image } from 'react-bootstrap';
import saleImg from '../../images/Rectangle 2.png';

const Sale = () => {
    return (
        <Container className='my-3'>
            <Image src={saleImg} fluid />
        </Container>
    );
};

export default Sale;