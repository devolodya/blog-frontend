import { styled } from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Home />
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div({
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const Content = styled.div({
  width: "80%",
  borderRight: "1px solid gray",
  borderLeft: "1px solid gray",
});
