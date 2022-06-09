import styled from "styled-components";

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray500};
`;