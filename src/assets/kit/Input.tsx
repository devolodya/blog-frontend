import { FC } from "react";
import { styled } from "styled-components";

interface IInput {
  placeholder?: string;
  onClick: () => void;
}
const Input: FC<IInput> = ({ placeholder, onClick }) => {
  return <StyledInput placeholder={placeholder} onClick={onClick} />;
};

export default Input;

const StyledInput = styled.input({
  width: "80%",
  height: "40px",
  background: "none",
  border: "none",
  borderBottom: "2px solid white",
  outline: "none",
  color: "white",
});
