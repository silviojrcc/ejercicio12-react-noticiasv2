import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';

const Noticia = () => {
    return (
        <Col md="6" lg="4">
            <Card className='mx-2 mb-4 p-3 bg-dark text-light'>
                <Card.Img variant="top" src="https://placehold.co/600x400" />
                <Card.Body>
                    <p>Diario el noticiudo</p>
                    <Card.Title>Titulo Noticia</Card.Title>
                    <Card.Text>
                        Hay una guerra de payasos en la peatonal muñecas
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center p-3'>
                    <Button as='a' href='https://google.com'>Ver noticia completa</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

Noticia.propTypes = {
    
};

export default Noticia;