import React from "react";
import { Container, HeroSection, UnderControlSect, EasierSect, PlansSect, DisplayText, Subtitle, HeroImage, PricingCardsContainer, PricingCard } from "./styles";
import PublicFooter from "../../components/Footer/footer";
import { Button, OutlineButton, SecondaryButton } from "../../styles/global";
import { useHistory } from "react-router-dom";

function Landing(){
    const history = useHistory()
    return(
        <>
            <Container>
                <HeroSection>
                    <DisplayText className="mb4">Controlá tu negocio con Printit</DisplayText>
                    <Subtitle className="mb4">La plataforma creada para ayudarte a gestionar tu empresa de manera sencilla.</Subtitle>
                    <Button className="mr2" role={'button'} onClick={() => history.push('/register')}>Empezar gratis</Button>
                    <OutlineButton role={'button'} onClick={() => history.push('/help')}>Saber más</OutlineButton>
                    <HeroImage src={process.env.PUBLIC_URL + '/img/dashboard.png'}/>
                </HeroSection>

                <UnderControlSect>
                    <h1>Todo bajo control, sin complicaciones.</h1>
                    <p>Gestioná los datos de tu empresa desde donde estés, tus datos están seguros en la nube.</p>
                </UnderControlSect>

                <EasierSect>
                    <h1>En equipo la vida es más sencilla.</h1>
                    <p>Agregá a tus colaboradores para encargarse de todo, sin perder el control.</p>
                </EasierSect>

                <PlansSect>
                    <h1 className="text-center">Conocé los planes que tenemos para vos.</h1>
                    <PricingCardsContainer>
                        <PricingCard plan="free">
                            <h3>0 gs</h3>
                            Free
                            <p>Para trabajadores independientes</p>
                            <OutlineButton>Empezar ya</OutlineButton>
                        </PricingCard>
                        <PricingCard plan="profesional">
                            <h3>300.000 gs</h3>
                            Profesional
                            <p>Para pequeñas y medianas empresas</p>
                            <SecondaryButton>Adquirir</SecondaryButton>
                        </PricingCard>
                    </PricingCardsContainer>
                    <p className="text-center mt4">
                        La prueba gratis no está disponible para los usuarios que ya lo hayan adquirido.
                        Consulta los términos y condiciones.
                    </p>
                </PlansSect>
            </Container>
            <PublicFooter />
        </>
    )
}
export default Landing;

