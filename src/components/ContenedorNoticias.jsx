import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Noticia from './Noticia';

const ContenedorNoticias = (props) => {
    return (
        <Container>
            <section className='d-flex row justify-content-around mt-4 p-5'>
                <Noticia></Noticia>
                <Noticia></Noticia>
                <Noticia></Noticia>
                <Noticia></Noticia>
            </section>
        </Container>
    );
};

ContenedorNoticias.propTypes = {
    
};

export default ContenedorNoticias;
