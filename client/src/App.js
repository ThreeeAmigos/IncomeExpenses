import "./App.css";
import MainContainer from "./containers/MainContainer";
import "./css/bootstrap.min.css"
import { Container} from "react-bootstrap"
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
    <Container>
      <MainContainer></MainContainer>
      </Container>
    </Wrapper>
  );
}

export default App;
