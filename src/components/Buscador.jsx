import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Spinner } from 'react-bootstrap';
import ContenedorNoticias from './ContenedorNoticias';
import { getNewsByCategory } from "../components/helpers/queries"

const Buscador = () => {

    const [category, setCategory] = useState("politics");
    const [news, setNews] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        console.log(category);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setShowSpinner(true);
                const response = await getNewsByCategory(category);
                setNews(response.results);
                setShowSpinner(false);
            } catch (err) {
                setNews([]);
            }
        };
      
        fetchData();
    }, [category]);

      const showComponent = (showSpinner) ? (<div className="my-5"><Spinner animation="border" variant="primary" /></div>) : <ContenedorNoticias news={news}></ContenedorNoticias>;

    return (
        <Container className='text-light mt-5 text-center'>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="10" md="4">
                         Buscar una categoría:
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Select onChange={ handleCategoryChange }>
                            <option value={"politics"}>Politica</option>
                            <option value={"entertainment"}>Entretenimiento</option>
                            <option value={"sports"}>Deportes</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            {showComponent}
        </Container>
    );
};

export default Buscador;