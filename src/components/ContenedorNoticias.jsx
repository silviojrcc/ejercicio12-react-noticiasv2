import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const ContenedorNoticias = props => {
    return (
        <Container>
            <section className='d-flex row justify-content-around mt-4 p-5'>
                <h2>Hola</h2>
            </section>
        </Container>
    );
};

ContenedorNoticias.propTypes = {
    
};

export default ContenedorNoticias;
