import styled from "styled-components";
import { medioMobile } from "../../utils";



const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: ${medioMobile}px) {
        flex-wrap: nowrap;
        justify-content: normal;
    }

    width: 624px;
    height: 47px;
    left: 0px;
    top: 39px;

    /* Color/B&W/White */
    background: #FFFFFF;
    border-radius: 8px;
`;

const Categoria = styled.span`
    width: 48px;
    height: 9px;
    top: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 9px;
    position: relative;
    text-align: left;
    left: 10.5%;

    /* Color/Neutral/400 */
    color: #BFBFBF;


`;

const Instituicao = styled.span`
    font-weight: bolder;
    border: solid black 1px;
    border-radius: 50%;
    width: 1em;
    padding: 0 2px;
    text-align: center;
`;

const Data = styled.span`
    position: relative;
    width: 21px;
    height: 9px;
    left: 90%;
    top: 0%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 9px;
    text-align: right;
    color: rgb(191, 191, 191);

`;

const Descricao = styled.span`
    width: 80%;
    text-align: center;
    height: 14px;
    left: 16px;
    top: 21px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    position: relative;
    /* identical to box height */

    /* Color/Primary/Branding */
    color: #5B1F53;
        
    @media screen and (min-width: 321px) {
        text-align: unset;
    }

`;

const Valor = styled.span`
    height: 14px;
    right: 16px;
    top: 30%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: rgb(200, 38, 38);
    position: relative;

    /* identical to box height */
    text-align: right;

    /* Color/Other/Alert */
    color: #C82626;

`;

export {Container, Categoria, Data, Instituicao, Descricao, Valor};