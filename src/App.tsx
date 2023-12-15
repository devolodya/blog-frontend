import { styled } from "styled-components";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: theme.colors.background,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const Content = styled.div({
  width: "80%",
  minHeight: "100vh",
});
