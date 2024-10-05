import { ReactNode } from "react";
import { Button as MUIButton, SxProps, Theme } from "@mui/material";
import { styles } from "./styles";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary";
  iconRight?: boolean;
  showText?: boolean;
  iconLeft?: boolean;
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
};

function Button({
  size = "medium",
  iconRight = false,
  showText = true,
  text,
  icon,
  onClick,
  sx = {},
}: ButtonProps) {
  return (
    <MUIButton
      sx={(theme) => ({
        ...styles,
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
      size={size}
      startIcon={icon && !iconRight ? icon : undefined}
      endIcon={icon && iconRight ? icon : undefined}
      onClick={onClick}
    >
      {showText && text && text}
    </MUIButton>
  );
}

export default Button;
