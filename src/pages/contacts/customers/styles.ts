import styled from 'styled-components';

export const ContactCard = styled.div`
  padding: 1.2rem;
  width: 95%;
  border-radius: .25rem;
  background-color: ${props => props.theme.colors.cardbg};
  border: 1px solid ${props => props.theme.colors.borderColor};

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;