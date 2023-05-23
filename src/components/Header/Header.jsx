import {Container,Vmenu,Vperfil,Vsino,Titulo} from "./Style";
import ImagemMenu from "../../imagens/Menu.png";
import ImagemSino from "../../imagens/Sino.png" ;
import ImagemPerfil from "../../imagens/Perfil.png" ;

const Header =() => (
    <Container>
       <Vmenu><img src={ImagemMenu} alt="ImagemMenu"/></Vmenu> 
       <Titulo>Home</Titulo>
        <Vsino><img src={ImagemSino} alt="ImagemSino"/></Vsino>
        <Vperfil><img src={ImagemPerfil} alt="ImagemPerfil"/></Vperfil>
    </Container>




);

export default Header;