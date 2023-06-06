import { styled} from "styled-components";
import Dispositivo from "../utils";

const Container = styled.div`
    position:relative;
    padding-top: 20px;
    padding-left: 20px;
    top: ${props => (props.temNavBar ?'100px' : '100px')};
    width:78%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    transition: flex-grow 0.3s ease-in-out;

    &.menuAberto {
      margin-left: 20%; /* Ajuste o valor conforme necessário */
    };

    @media screen and (min-width: ${Dispositivo.desktop}px) {
        height: 720px;
       
      };

    @media screen and (min-width: ${Dispositivo.smallMobile}px) {
        margin-top: 40px;
        left: 0%;

      };

`;

export default Container;