import { Stack, Skeleton } from "@mui/material";
import { styles, topContainerStyles } from "./styles";

// For loading
function SkeletonFeedItem() {
  return (
    <Stack sx={styles}>
      <Stack sx={topContainerStyles}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="50%" height={20} />
      </Stack>
      <Skeleton variant="rectangular" width="100%" height={500} />
    </Stack>
  );
}

export default SkeletonFeedItem;
