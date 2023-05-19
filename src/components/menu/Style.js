import styled from "styled-components";

const MeuNav = styled.nav`
    position: flex;
    width: 272px;
    height: 656px;
    left: 0px;
    top: 64px;
`;

const MeuDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px 8px 24px;
    gap: 24px;

    width: 272px;
    height: 40px;
`;

/*const MinhaImg = styled.div`
    position: absolute;
    left: 8.82%;
    right: 31.62%;
    top: 2.74%;
    bottom: 90.85%;
`;
*/
export {MeuNav, MeuDiv};