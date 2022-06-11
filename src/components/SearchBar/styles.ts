import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  position: relative;
`;

export const SearchBox = styled.div`
border: 1px solid ${(props) => props.theme.colors.borderColor};
border-radius: 1.2rem;
background: ${(props) => props.theme.colors.cardbg};
padding-left: 0.75rem;
display: none;
align-items: center;

@media (min-width: 768px){
  display: flex;
}
`;

export const SearchResults = styled.div`
border: 1px solid ${(props) => props.theme.colors.borderColor};
border-radius: .5rem;
background: ${(props) => props.theme.colors.cardbg};
padding: 1rem;
margin-top: 5px;
width: 500px;
display: none;
position: absolute;

&.active {
  display: block;
}

`;

export const InputSearch = styled.input`
border: none;
border-radius: 0 1.2rem 1.2rem 0;
padding: 0.375rem 0.75rem;
display: inline-block;
width: 250px;
height: 35px;
color: ${(props) => props.theme.colors.text};
background: ${(props) => props.theme.colors.cardbg};
font-size: 1rem;
transition: width .3s ease-in-out;

:active,
:focus {
  width: 330px;
  outline: 0;
}
`;