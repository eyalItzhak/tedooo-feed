import {
  SxProps,
  dividerClasses,
  imageListClasses,
  imageListItemClasses,
} from "@mui/material";
import { colors } from "../../assets/consts/colors";

export const styles: SxProps = {
  width: "1120px",
  paddingTop: "24px",
  gap: "16px",
  borderRadius: "4px",
  background: colors.white,
  boxShadow: "0px 1px 7px 0px #282F2D12",

  [`.${dividerClasses.root}`]: {
    border: `1px solid ${colors.divider}`,
  },

  [`.${imageListClasses.root}`]: {
    display: "inline-flex",
    maxHeight: "550px",
    justifyContent: "center",
    gap: "8px !important",
    background: colors.olive,
  },

  [`.${imageListItemClasses.root}`]: {
    img: {
      height: "100%",
    },
  },
};

export const topContainerStyles: SxProps = {
  padding: "0px 24px 0px 24px",
  gap: "16px",
};
