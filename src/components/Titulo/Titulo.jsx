import { SpanTitulo,Container, Icone } from "./Style";


const Titulo= (page) => (
    <Container>
        <Icone>
            <img src = {page.icon} alt="ícone" />
        </Icone>
        <SpanTitulo>
            {page.id}
        </SpanTitulo> 
    </Container>

); 

export default Titulo;