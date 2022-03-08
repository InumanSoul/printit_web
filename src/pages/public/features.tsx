import React from "react";
import { Container, UnderControlSect} from "./styles";
import { Link } from "react-router-dom";

function Features(){
    return(
        <>
            <Container>
                <UnderControlSect>
                    <h1>Descubri las caracteristicas</h1>
                    <p>Lorem ipsum dolor sit ammet.</p>
				    <Link to="/" className="text-decoration-none text-reset mr3">Inicio</Link>
                </UnderControlSect>
            </Container>
        </>
    )
}
export default Features;