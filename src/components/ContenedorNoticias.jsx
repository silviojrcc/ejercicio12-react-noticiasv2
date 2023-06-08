import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Noticia from './Noticia';

const ContenedorNoticias = ({ news }) => {
    return (
        <Container>
            <section className='d-flex row justify-content-around mt-4 p-5'>
                {news.map(noticia => <Noticia key={noticia.title} noticia={noticia} />)}
            </section>
        </Container>
    );
};

ContenedorNoticias.propTypes = {
    
};

export default ContenedorNoticias;
