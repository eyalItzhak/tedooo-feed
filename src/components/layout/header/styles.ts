import { SxProps } from "@mui/material";
import { colors } from "../../../assets/consts/colors";

export const styles: SxProps = {
  background: colors.white,
  boxShadow: "0px 7px 7px 0px #6D6D6D0A",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "sticky",
  top: "0px",
  zIndex: 1,
};

export const leftContainerStyles = {
  gap: "12px",
  alignItems: "center",
};

export const rightContainerStyles = {
  gap: "16px",
  alignItems: "center",
};
