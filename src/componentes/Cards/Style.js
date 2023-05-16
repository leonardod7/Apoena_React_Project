import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: 321px) {
        flex-wrap: nowrap;
        justify-content: normal;
    };
`;

export const Categoria = styled.span`
    font-weight: bolder;
    border: solid black 1px;
    border-radius: 50%;
    width: 1em;
    padding: 0 2px;
    text-align: center;
`;

export const Instituicao = styled.span`
    font-weight: bolder;
    border: solid black 1px;
    border-radius: 50%;
    width: 1em;
    padding: 0 2px;
    text-align: center;
    color: red;
`;

export const Data = styled.span`
    font-family: monospace;
    font-size: large;
    width: 6em;
    text-align: center;
`;

export const Descricao = styled.span`
    width: 23em;
    text-align: center;
    color: red;

    @media screen and (min-width: 321px) {
        width: auto;
        text-align: center;
    };    
`;

export const Valor = styled.span`
    font-family: monospace;
    font-size: large;
    width: 6em;
    text-align: center;
`;
