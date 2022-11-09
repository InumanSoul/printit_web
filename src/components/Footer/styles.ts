import styled from 'styled-components'

export const Footer = styled.div`
  padding: 50px 40px 30px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  background: ${props => props.theme.colors.darkBackground};
  color: ${props => props.theme.colors.textInvert};
`;