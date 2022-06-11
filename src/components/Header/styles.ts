import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;

  @media (min-width: 768px){
    justify-content: space-between;
  }
`;

export const Brand = styled.div`
  display: flex;
  width: 80px;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: 2px solid white;
  background: #ebebeb;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 600;
`;