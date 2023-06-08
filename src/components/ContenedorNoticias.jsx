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
    news: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            keywords: PropTypes.arrayOf(PropTypes.string),
            creator: PropTypes.arrayOf(PropTypes.string),
            video_url: PropTypes.string,
            description: PropTypes.string,
            content: PropTypes.string,
            pubDate: PropTypes.string.isRequired,
            image_url: PropTypes.string,
            source_id: PropTypes.string.isRequired,
            category: PropTypes.arrayOf(PropTypes.string),
            country: PropTypes.arrayOf(PropTypes.string),
            language: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ContenedorNoticias;
