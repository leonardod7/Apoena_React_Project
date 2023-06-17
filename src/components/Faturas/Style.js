import styled from "styled-components";
import Dispositivo from "../../utils.js"

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    overflow-y: scroll;
    padding-left: 0%;
    padding-top: 20px;

    @media screen and (max-width: ${Dispositivo.tablet}px) {
        padding-left: 0px;
    }
`;

export default Container;