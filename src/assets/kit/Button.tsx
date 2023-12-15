import { FC } from "react";
import { styled } from "styled-components";

interface IButton {
  appearance: "primary" | "secondary";
  onClick?: () => void;
  text: string;
  type?: string;
}

const Button: FC<IButton> = ({ appearance, onClick, text }) => {
  return (
    <StyledButton appearance={appearance} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ appearance: "primary" | "secondary" }>(
  ({ appearance, theme }) => ({
    width: "100px",
    height: "30px",
    background:
      appearance === "primary"
        ? theme.colors.mainButton
        : theme.colors.secondaryButton,
    outline: "none",
    border: "none",
    borderRadius: "4px",
    color:
      appearance === "primary"
        ? theme.colors.white
        : theme.colors.secondaryButtonText,
    fontFamily: "'Montserrat', sans-serif",
    cursor: "pointer",
  })
);
