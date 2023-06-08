import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Spinner } from 'react-bootstrap';
import ContenedorNoticias from './ContenedorNoticias';
import { getNewsByCategoryAndCountry } from "../components/helpers/queries"

const Buscador = () => {

    const [category, setCategory] = useState("politics");
    const [country, setCountry] = useState("ar");
    const [news, setNews] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setShowSpinner(true);
                const response = await getNewsByCategoryAndCountry(category, country);
                setNews(response.results);
                console.log(news);
                setShowSpinner(false);
            } catch (err) {
                setNews([]);
            }
        };
      
        fetchData();
    }, [category, country]);

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
                <Form.Group as={Row} className='my-4'>
                    <Form.Label column sm="10" md="4">
                         Buscar por país:
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Select onChange={ handleCountryChange }>
                            <option value={"ar"}>Argentina</option>
                            <option value={"br"}>Brasil</option>
                            <option value={"uy"}>Uruguay</option>
                            <option value={"cl"}>Chile</option>
                            <option value={"bo"}>Bolivia</option>
                            <option value={"uz"}>Uzbekistan</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            {showComponent}
        </Container>
    );
};

export default Buscador;