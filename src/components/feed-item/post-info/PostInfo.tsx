import { Box, Stack, Typography } from "@mui/material";
import Avatar from "../../ui/avatar/Avatar";
import { styles } from "./styles";
import { typography } from "../../../assets/consts/typography";
import { colors } from "../../../assets/consts/colors";
import { timeSince } from "../../../utils/timeSince";

type PostInfoProps = {
  avatar: string;
  username: string;
  shopName: string;
  date: Date;
};

function PostInfo({ avatar, username, shopName, date }: PostInfoProps) {
  return (
    <Stack direction="row" sx={styles}>
      <Avatar src={avatar} />
      <Stack>
        <Typography sx={typography.subHeading} color={colors.username}>
          {username}
        </Typography>
        <Box>
          <Typography
            display="inline"
            sx={typography.body500}
            color={colors.blue}
          >
            {shopName}
          </Typography>
          <Typography
            display="inline"
            sx={typography.body400}
            color={colors.grey}
          >
            {` · ${timeSince(date)}`}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default PostInfo;
