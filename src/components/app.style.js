import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 300px;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  transition: background-color 0.8 linear, color 0.5s linear;
`;

export const MainSection = styled.div`
  text-align: center;
`;
