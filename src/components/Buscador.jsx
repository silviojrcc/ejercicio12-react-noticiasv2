import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import ContenedorNoticias from './ContenedorNoticias';
import { getNewsByCategory } from "../components/helpers/queries"

const Buscador = () => {

    const [category, setCategory] = useState("politics");
    const [news, setNews] = useState([]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        console.log(category);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getNewsByCategory(category);
                setNews(response.results);
            } catch (err) {
                setNews([]);
            }
        };
      
        fetchData();
      }, [category]);

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
            <ContenedorNoticias news={news}></ContenedorNoticias>
        </Container>
    );
};

export default Buscador;