import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {candidatos} from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false);
    const [listaCandidatos, setListaCadidatos] = useState(candidatos);
    const [questionarios,setQuestionarios] = useState();

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato
                    listaCandidatos = {listaCandidatos}
                    setListaCadidatos = {setListaCadidatos}
                    detalharCandidato={detalharCandidato}
                    setDetalharCandidato={setDetalharCandidato}
                    />
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos} 
                    />
                )
            }
        </Pagina>
    );
}