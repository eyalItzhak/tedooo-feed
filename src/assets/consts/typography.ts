export const fonts = {
  poppins: "Poppins",
  dmSans: "DM Sans",
};

export const weights = {
  400: 400,
  500: 500,
};

export const typography = {
  body400: {
    fontFamily: fonts.dmSans,
    fontSize: "14px",
    fontWeight: weights[400],
    lineHeight: "20px",
  },
  body500: {
    fontFamily: fonts.dmSans,
    fontSize: "14px",
    fontWeight: weights[500],
    lineHeight: "20px",
  },
  subHeading: {
    fontFamily: fonts.dmSans,
    fontSize: "16px",
    fontWeight: weights[500],
    lineHeight: "20px",
  },
  tab: {
    fontFamily: fonts.poppins,
    fontSize: "16px",
    fontWeight: weights[400],
    lineHeight: "24px",
  },
  button: {
    fontFamily: fonts.dmSans,
    fontSize: "14px",
    fontWeight: weights[500],
    lineHeight: "22px",
  },
};
