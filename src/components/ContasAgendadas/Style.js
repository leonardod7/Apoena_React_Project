import styled from "styled-components";

const Container = styled.div`
/* Card_List */

width: 312px;
height: 267px;
margin-right: 20px;
margin-bottom: 20px;

/* Color/B&W/White */
background: #FFFFFF;

/* Card */
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
border-radius: 8px;
`;


const Titulo = styled.span`
    /* Contas agendadas */
    width: 312px;
    height: 19px;
    left: 16px;
    top: 16px;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* identical to box height */

    /* Color/Primary/Branding */
    color: #5B1F53;
`;


export {Container, Titulo};
