import styled from "styled-components";


const Espaco = 10;

const Container = styled.div`
/* Card_Saldo */

width: 312px;
height: 92px;
background: #FFFFFF;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
border-radius: 8px;
display: flex;
flex-wrap: wrap;
flex-direction: flex-start;
justify-content: space-around;
padding-left: ${Espaco}px;
padding-top: ${Espaco}px;
margin-right: 20px;
margin-bottom: 20px;
`;

/* Saldo em conta */
const SaldoConta = styled.span`
height: 19px;
top: 16px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
margin-right: ${Espaco}px;
/* identical to box height */

/* Color/Primary/Branding */
color: #5B1F53;
`;


/* R$ 0.000,00 */
const Valor = styled.span`

width: 144px;
height: 28px;

font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 24px;
margin-right:50%;
line-height: 28px;


/* Color/Neutral/800 */
color: #383838;
`;


/* Button_Icon */
const AtualizarBox = styled.div`

width: 40px;
height: 40px;

/* Color/Neutral/50 */
background: #F9F9F9;
border-radius: 50px;
`;

/* replay

arrow, arrows, control, controls, music, refresh, renew, repeat, replay, video
*/
const Replay = styled.div`

width: 24px;
height: 24px;

`;

const Vector = styled.div`
/* Vector */
    padding-left: ${Espaco}px;
`;

/* Badge */

const Badge = styled.div`
/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 2px 8px;
gap: 8px;
margin-right: ${Espaco}px;
width: 100px;
height: 16px;


/* Color/Secondary/Branding */
background: #2AB9D4;
border-radius: 19px;
`;


/* Label */
const Label = styled.span`
height: 12px;

font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
/* identical to box height */

/* Color/B&W/White */
color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`;

export {Container, SaldoConta, Valor, AtualizarBox, Replay, Vector, Badge, Label};