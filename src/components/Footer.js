import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className='footer'>
            <footer className="bg-dark text-white mt-5">
                <Container fluid>
                    <Row className="py-3">
                        <Col className="text-center">
                            <p>&copy; 2023 Films. Tous droits réservés.</p>
                        </Col>
                    </Row>
                </Container>
            </footer></div>
    );
};

export default Footer;

