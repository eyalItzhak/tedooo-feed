import { Stack, Typography } from "@mui/material";

import { ReactComponent as LikeIcon } from "../../../assets/icons/like.svg";
import { typography } from "../../../assets/consts/typography";
import { colors } from "../../../assets/consts/colors";
import { likesStyles, styles } from "./styles";

type ReactionsProps = {
  likes: number;
  comments: number;
};

function Reactions({ likes, comments }: ReactionsProps) {
  return (
    <Stack sx={styles} direction="row">
      <Stack direction="row" sx={likesStyles}>
        <LikeIcon />
        <Typography
          sx={typography.body400}
          color={colors.reactionGrey}
        >{`${likes} Likes`}</Typography>
      </Stack>
      <Typography
        sx={typography.body400}
        color={colors.reactionGrey}
      >{`${comments} Comments`}</Typography>
    </Stack>
  );
}

export default Reactions;
