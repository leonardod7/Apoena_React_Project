import { styled} from "styled-components";
import Dispositivo from "../utils";

const ContainerHome = styled.div`
    position: relative;
    padding-top: 20px;
    padding-left: 40px;
    top: 100px;
    width:90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-evenly;
    transition: flex-grow 0.3s ease-in-out;

    &.menuAberto {
      margin-left: 20%; /* Ajuste o valor conforme necessário */
      width:78%;
    };

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        height: 720px;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        margin-top: 40px;
        left: 20%;
    };

`;

const ContainerExtrato = styled.div`
    position: relative;
    padding-top: 20px;
    padding-left: 40px;
    top: 100px;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-evenly;
    align-content: space-start;
    transition: flex-grow 0.3s ease-in-out;
    gap: 80px;

    &.menuAberto {
      margin-left: 20%; /* Ajuste o valor conforme necessário */
      width:78%;
    };

    @media screen and (min-width: ${Dispositivo.desktop}px) {
      height: 720px;
    };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
      margin-top: 40px;
      left: 20%;
    };
`;

const ContainerFaturas = styled.div`
      position:relative;
      padding-top: 20px;
      padding-left: 20px;
`;

export {ContainerHome, ContainerExtrato, ContainerFaturas};