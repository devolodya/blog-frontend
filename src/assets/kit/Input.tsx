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

const StyledInput = styled.input(({ theme }) => ({
  width: "80%",
  height: "40px",
  background: "none",
  border: `1px solid ${theme.colors.white}`,
  outline: "none",
  color: theme.colors.white,
  paddingLeft: "5%",
  boxSizing: "border-box",
  borderRadius: "10px",
}));
