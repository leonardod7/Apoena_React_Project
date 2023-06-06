import styled from "styled-components";
import Dispositivo from "../../utils";

const MeuNav = styled.nav`
    position: absolute;
    top: 64px;
    width: 20%;
    height: 100%;
    border: #BFBFBF 1px solid;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-300%)'};
    flex-grow: ${({ menuAberto }) => (menuAberto ? 1 : 0)};
    transition: transform 0.3s ease-in-out;
    background-color: white;
    z-index: 999; /* Nível de sobreposição */

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        width: 80%;
      };

    @media screen and (min-width: ${Dispositivo.mobile}px) {
        width: 45%;
    };

    @media screen and (min-width: ${Dispositivo.tablet}px) {
        width: 30%;
    };

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        width: 20%;
    };


`;

const MeuDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 24px;
    gap: 24px;
    font-size: 12px;
    width: 100%;
    height: 40px;
`;

const MeuSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 48px;
    gap: 12px;
    font-size: 10px;
    width: 100%;
    height: 40px;
`;

const MeuLogo = styled.div`
    padding-top: 18px;
    padding-bottom: 24px;
    padding-left: 24px;
`;

export {MeuNav, MeuDiv, MeuSubDiv, MeuLogo};