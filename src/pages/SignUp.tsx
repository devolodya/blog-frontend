import React from "react";
import { styled } from "styled-components";
import Button from "../assets/kit/Button";
import Input from "../assets/kit/Input";

const SignUp = () => {
  return (
    <Container>
      <MainText>Sign Up to join our community!</MainText>
      <Content>
        <Input placeholder="Full name" onClick={() => console.log(1)} />
        <Input placeholder="Email" onClick={() => console.log(1)} />
        <Input placeholder="Username" onClick={() => console.log(1)} />
        <Input placeholder="Password" onClick={() => console.log(1)} />
        <Input placeholder="Confirm password" onClick={() => console.log(1)} />
        <Button
          appearance="primary"
          text="Sign Up"
          onClick={() => console.log(1)}
        />
      </Content>
    </Container>
  );
};

export default SignUp;

const Container = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
});
const Content = styled.div({
  width: "30%",
  border: "1px solid gray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "10px",
  gap: "10px",
});
const MainText = styled.div({
  color: "white",
  fontSize: "24px",
  fontWeight: 600,
});
