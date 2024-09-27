import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { Container, Button, Form } from "react-bootstrap";
/*
export default function DetalhesCandidato(props) {
    const [questionamento, setQuestionamento] = useState("");
    const [listaQuestionarios, setListaQuestionarios] = useState(props.candidatoSelecionado.questionamentos || []);

    function adicionarQuestionario(){
        listaQuestionarios.push(questionamento);
    }

    return (
        <Container>
            <h2>Proposta do candidato: {props.candidatoSelecionado.nome}</h2>
            <h5>Propostas:</h5>
            <ul>
                {props.candidatoSelecionado.propostas.map((proposta, i) => (
                    <li key={i}>{proposta}</li>
                ))}
            </ul>
            <h5>Questionamentos:</h5>
            <Form.Control 
                type="text" 
                placeholder="Digite sua pergunta" 
                value={questionamento} 
                onChange={(item) => setQuestionamento(item.target.value)} 
            />
            <Button onClick={adicionarQuestionario}>Enviar Pergunta</Button>
            <Button onClick={() => props.setDetalharCandidato(false)} className="mt-3">Voltar</Button>
        </Container>
    );
}
*/

export default function DetalhesCandidato(props) {
    const [questionamento, setQuestionamento] = useState("");
    const [listaQuestionarios, setListaQuestionarios] = useState([...props.candidatoSelecionado.questionamentos]);

    function adicionarQuestionario() {
        if (questionamento) {
            const novoQuestionamento = questionamento;
            setListaQuestionarios([...listaQuestionarios, novoQuestionamento]);
            setQuestionamento(""); // Limpa o input
        }
    }

    return (
        <Container>
            <h2>Propostas do candidato: {props.candidatoSelecionado.nome}</h2>
            <h5>Propostas:</h5>
            <ul>
                {props.candidatoSelecionado.propostas.map((proposta, i) => (
                    <li key={i}>{proposta}</li>
                ))}
            </ul>
            <h5>Questionamentos:</h5>
            <Form.Control 
                type="text" 
                placeholder="Digite sua pergunta" 
                value={questionamento} 
                onChange={(e) => setQuestionamento(e.target.value)} 
            />
            <Button onClick={adicionarQuestionario}>Enviar Pergunta</Button>

            <h5>Lista de Questionamentos:</h5>
            <ul>
                {listaQuestionarios.map((q, index) => (
                    <li key={index}>{q}</li>
                ))}
            </ul>

            <Button onClick={() => props.setDetalharCandidato(false)} className="mt-3">Voltar</Button>
        </Container>
    );
}
