import { FC } from "react";
import { styled } from "styled-components";
import { InputProps } from "../../types";

const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  ref,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      ref={ref}
    />
  );
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
