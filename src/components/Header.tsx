import { useState } from "react";
import { styled } from "styled-components";
import Button from "../assets/kit/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          LOGO
        </div>
        {(!isAuth && (
          <ButtonsContainer>
            <Button
              appearance="primary"
              text="Login"
              onClick={() => navigate("/login")}
            />

            <Button
              appearance="secondary"
              text="Sign Up"
              onClick={() => navigate("/signup")}
            />
          </ButtonsContainer>
        )) || (
          <AuthorizedInfo>
            <Avatar />
          </AuthorizedInfo>
        )}
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid gray",
});
const Content = styled.div({
  width: "80%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: 600,
  color: "white",
});
const ButtonsContainer = styled.div({
  display: "flex",
  gap: "10px",
});

const AuthorizedInfo = styled.div({
  display: "flex",
  gap: "10px",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});
const Avatar = styled.div({
  height: "30px",
  width: "30px",
  background: "blue",
  borderRadius: "999px",
});
