import styled from "styled-components";

interface PricingProps{
  plan: string;
}

export const Container = styled.div`
  width: 100%;
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 992px) {
    width: 990px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  margin-top: 2rem;
`;

export const DisplayText = styled.h1`
  font-size: 3.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
`;

export const HeroSection = styled.div`
  padding: 130px 0;
  text-align: center;
`;

export const UnderControlSect = styled.div`
  padding: 130px 0;
`;

export const EasierSect = styled.div`
  padding: 130px 0;
`;

export const PlansSect = styled.div`
  padding: 130px 0;
`;

export const PricingCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;
`;

export const PricingCard = styled.div<PricingProps>`
  padding: 1.25rem;
  background: ${props => props.plan === 'free' ? props.theme.colors.cardbg : props.theme.colors.primary};
  border-radius: 0.5rem;
`;