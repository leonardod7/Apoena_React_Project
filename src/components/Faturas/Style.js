import styled from "styled-components";
import Dispositivo from "../../utils.js"

const Container = styled.div`
    position: relative;
    max-width: 1100px;
    overflow-y: scroll;
    border-top: 4px solid #5B1F53;
`;

const Cabecalho = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #5B1F53;
    align-text: left;
    margin-bottom: 20px;
`;

export { Container, Cabecalho };