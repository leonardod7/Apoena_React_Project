import styled from "styled-components";
import Titulobox from "./Titulo";

/* Home */

const SpanTitulo = styled.span`
position: absolute;
width: 65px;
height: 28px;
left: 348px;
top: 88px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;

color: #5B1F53;

`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;

    }
`;

export {SpanTitulo, Container};

