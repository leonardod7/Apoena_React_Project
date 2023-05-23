import styled from "styled-components";

const MeuNav = styled.nav`
    position: flex;
    width: 300px;
    height: 100%;
    border: solid black 1px;
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