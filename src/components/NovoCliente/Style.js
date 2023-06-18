import styled from "styled-components";
import Dispositivo  from "../../utils";

const input_data= {
    width: '490px',
    height: '25px',
    backgroundColor:'#4CAF50',
    color: 'white',
    /*padding: '14px 20px',*/
    margin: '0px 0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};



const Formulario = styled.div`
    display:flex;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;
    margin-right: 20px;
    margin-left: 75px;
    justify-content: center;
`;
const Field = styled.div`
`;






const Container = styled.div`
    position: absolute;
    background-color: #e1e1ff;
    width: 950px;
    height: 450px;
    left:200px;
    bottom:300px;
    top: 100px;
    border-radius:10px;
    box-shadow: -4px 4px 14px 1px rgba(0, 0, 0, 0.5);
    `;
/*const Container2 = styled.div`
    position: absolute;
    background-color: #320019;
    width: 450px;
    height: 30px;
    left:50px;
    bottom:300px;
    top: 100px;
    border-radius: 10px;
`;
const Container3 = styled.div`
    position: absolute;
    background-color: #320019;
    width: 450px;
    height: 30px;
    left:50px;
    bottom:300px;
    top: 200px;
    border-radius: 10px;
`;
const Container4 = styled.div`
    position: absolute;
    background-color: #320019;
    width: 450px;
    height: 30px;
    left:50px;
    bottom:300px;
    top: 300px;
    border-radius: 10px;
`;
const Container5 = styled.div`
    position: absolute;
    background-color: #320019;
    width: 450px;
    height: 30px;
    left:50px;
    bottom:300px;
    top: 400px;
    border-radius: 10px;
`;
*/
const Enviar = styled.div`
    position: absolute;
    background-color: grey;
    width: 120px;
    height: 25px;
    left:750px;
    bottom:50px;
    border-radius:8px;
    text-align: center;
`;
const Sair= styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    background-color:#f1f1f1;
    left: 900px;
    top: 25px;
    border-radius: 20px;
    vertical-align:bottom;
`;
const Titulo = styled.div`
    position: absolute;
    text-align: center;
    left: 20px;
`;
export {Container,Enviar,Sair,Titulo,Formulario,Field,input_data}
