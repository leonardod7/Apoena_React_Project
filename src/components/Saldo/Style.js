import styled from "styled-components";


const Container = styled.div`
/* Card_Saldo */

position: absolute;
width: 312px;
height: 92px;
left: 316px;
top: 180px;

background: #FFFFFF;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
border-radius: 8px;
`;

/* Saldo em conta */
const SaldoConta = styled.span`
position: absolute;
height: 19px;
top: 16px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* identical to box height */

/* Color/Primary/Branding */
color: #5B1F53;
`;


/* R$ 0.000,00 */
const Valor = styled.span`

position: absolute;
width: 144px;
height: 28px;
left: 16px;
top: 47px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;

/* Color/Neutral/800 */
color: #383838;
`;


/* Button_Icon */
const AtualizarBox = styled.div`
position: absolute;
width: 40px;
height: 40px;
left: 264px;
top: 8px;

/* Color/Neutral/50 */
background: #F9F9F9;
border-radius: 50px;
`;

/* replay

arrow, arrows, control, controls, music, refresh, renew, repeat, replay, video
*/
const Replay = styled.div`

position: absolute;
width: 24px;
height: 24px;
left: 8px;
top: 8px;
`;

const Vector = styled.div`
/* Vector */

position: absolute;
left: 16.67%;
right: 16.67%;
top: 8.33%;
bottom: 8.33%;

/* Color/Primary/Branding */

`;

/* Badge */

const Badge = styled.div`
/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 2px 8px;
gap: 8px;

position: absolute;
width: 100px;
height: 16px;
left: 143px;
top: 18px;

/* Color/Secondary/Branding */
background: #2AB9D4;
border-radius: 19px;
`;


/* Label */
const Label = styled.span`
height: 12px;

font-family: 'Roboto';
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