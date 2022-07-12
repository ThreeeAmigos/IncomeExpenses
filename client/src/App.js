import "./App.css";
import MainContainer from "./containers/MainContainer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  return (
    <Wrapper>
      <MainContainer></MainContainer>
    </Wrapper>
  );
}

export default App;
