import { SxProps, tabClasses } from "@mui/material";
import { colors } from "../../../assets/consts/colors";
import { fonts, typography, weights } from "../../../assets/consts/typography";

export const styles: SxProps = {
  ...typography.tab,
  color: colors.grey,
  textTransform: "none",
  opacity: 1,
  letterSpacing: "-0.16px",
  padding: 0,
  alignItems: "center",
  // minHeight: 0,

  [`&.${tabClasses.selected}`]: {
    color: colors.tabSelected,
    fontWeight: weights[500],

    path: {
      stroke: colors.tabSelected,
    },
  },
};
