import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button, Col } from 'react-bootstrap';

const Noticia = ({ noticia }) => {

    if (!noticia.image_url) {
        return null;
    }

    return (
        <Col md="6" lg="4">
            <Card className='mx-2 mb-4 p-3 bg-dark text-light'>
                <Card.Img variant="top" src={noticia.image_url} alt={noticia.title} />
                <Card.Body>
                    <p>{noticia.source_id}</p>
                    <Card.Title>{noticia.title}</Card.Title>
                    <Card.Text>
                        {noticia.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center p-3'>
                    <Button as='a' href={noticia.link}>Ver noticia completa</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.shape({
        image_url: PropTypes.string,
        source_id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
    }).isRequired,
};

export default Noticia;