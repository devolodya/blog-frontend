import React from "react";
import { styled } from "styled-components";
import Button from "../assets/kit/Button";

const TextEditor = () => {
  return (
    <Container>
      <Editor />
      <Button
        appearance="primary"
        onClick={() => console.log(1)}
        text="Create post"
      />
    </Container>
  );
};

export default TextEditor;

const Container = styled.div({
  width: "100%",
  height: "300px",
  borderRight: "1px solid gray",
  borderBottom: "1px solid gray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
});
const Editor = styled.textarea({
  width: "90%",
  height: "80%",
  resize: "none",
  fontSize: "20px",
  border: "none",
  outline: "none",
  fontFamily: "'Montserrat', sans-serif",
  borderRadius: "4px",
  boxSizing: "border-box",
  padding: "10px",
});
