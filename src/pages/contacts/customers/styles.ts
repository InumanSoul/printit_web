import styled from 'styled-components';

export const ContactCard = styled.div`
  padding: 1rem .7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 10px;

  :nth-last-of-type(1) {
    border-bottom: 0;
  }
`;