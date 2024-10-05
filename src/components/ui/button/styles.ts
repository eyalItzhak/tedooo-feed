import { SxProps, buttonClasses } from "@mui/material";
import { typography } from "../../../assets/consts/typography";
import { colors } from "../../../assets/consts/colors";

export const styles: SxProps = {
  ...typography.button,
  padding: "8px 24px",
  gap: "8px",
  borderRadius: "4px",
  textTransform: "none",
  color: colors.button,

  [`.${buttonClasses.icon}`]: {
    padding: "3px 0px",
  },
};
