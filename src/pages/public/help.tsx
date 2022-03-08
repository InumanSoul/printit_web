import React from "react";
import { Container, UnderControlSect} from "./styles";
import { Link } from "react-router-dom";

function Help(){
    return(
        <>
            <Container>
                <UnderControlSect>
                    <h1>Preguntas frecuentes</h1>
                    <p>Lorem ipsum dolor sit ammet.</p>
                    <Link to="/" className="text-decoration-none text-reset mr3">Inicio</Link>
                </UnderControlSect>
            </Container>
        </>
    )
}
export default Help;