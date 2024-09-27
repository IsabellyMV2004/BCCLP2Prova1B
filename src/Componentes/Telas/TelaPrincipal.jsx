import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {candidatos} from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false);
    const [listaCandidatos, setListaCadidatos] = useState(candidatos);
    const [candidatoSelecionado, setCandidatoSelecionado] =  useState(candidatos);

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato
                    listaCandidatos = {listaCandidatos}
                    setListaCadidatos = {setListaCadidatos}
                    detalharCandidato={detalharCandidato}
                    setDetalharCandidato={setDetalharCandidato}
                    candidatoSelecionado = {candidatoSelecionado}
                    setCandidatoSelecionado = {setCandidatoSelecionado}
                    />
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos} 
                    candidatoSelecionado = {candidatoSelecionado}
                    setCandidatoSelecionado = {setCandidatoSelecionado}
                    />
                )
            }
        </Pagina>
    );
}