import React from "react";
import { styled } from "styled-components";
import Button from "../assets/kit/Button";

const Header = () => {
  return (
    <Container>
      <Content>
        LOGO
        <ButtonsContainer>
          <Button
            appearance="primary"
            text="Login"
            onClick={() => console.log(1)}
          />

          <Button
            appearance="secondary"
            text="Sign Up"
            onClick={() => console.log(1)}
          />
        </ButtonsContainer>
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
