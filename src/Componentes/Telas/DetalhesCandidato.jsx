import { Container } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
export default function DetalhesCandidato(props) {

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            { //...
                
            }
            <Row className='mt-2 mb-2'>
                <Col md={{offset:1}} >
                    <Button onClick={() => {
                        props.setDetalharCandidato(false);
                    }}>Voltar</Button>
                </Col>
            </Row>
        </Container>
    );
}