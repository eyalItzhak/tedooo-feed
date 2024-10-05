import { SxProps, inputBaseClasses } from "@mui/material";
import { colors } from "../../../assets/consts/colors";
import { fonts, weights } from "../../../assets/consts/typography";

export const styles: SxProps = {
  borderRadius: "32px",
  background: colors.lightGrey,
  padding: "11px 12px",

  [`.${inputBaseClasses.root}`]: {
    fontFamily: fonts.dmSans,
    color: colors.grey,
    fontSize: "14px",
    fontWeight: weights[400],
    lineHeight: "18.23px",
    letterSpacing: "-0.16px",
  },
};
