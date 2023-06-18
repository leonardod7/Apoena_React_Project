import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100%;
    overflow-y: scroll;
    padding-top: 20px;
    border-top: 4px solid #5b1f53;
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