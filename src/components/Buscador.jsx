import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import ContenedorNoticias from './ContenedorNoticias';

const Buscador = () => {

    const getData = () => {
        
    }

    return (
        <Container className='text-light mt-5 text-center'>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="10" md="4">
                         Buscar una categoría:
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Select>
                            <option>Elija una opcion</option>
                            <option>Economía</option>
                            <option>Policiales</option>
                            <option>Deportes</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            <ContenedorNoticias></ContenedorNoticias>
        </Container>
    );
};

export default Buscador;