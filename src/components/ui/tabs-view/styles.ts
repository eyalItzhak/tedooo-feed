import { SxProps, tabsClasses } from "@mui/material";
import { colors } from "../../../assets/consts/colors";

export const styles: SxProps = {
  alignItems: "center",
  [`.${tabsClasses.flexContainer}`]: {
    gap: "32px",
  },

  [`.${tabsClasses.indicator}`]: {
    background: colors.tabSelected,
    bottom: "14px",
  },
};
