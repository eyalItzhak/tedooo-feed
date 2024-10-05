import { Stack } from "@mui/material";
import SkeletonFeedItem from "../../components/feed-item/SkeletonFeedItem";
import { styles } from "./styles";

function Loading() {
  return (
    <Stack sx={styles}>
      <SkeletonFeedItem />
    </Stack>
  );
}

export default Loading;
