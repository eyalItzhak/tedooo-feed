import { Stack } from "@mui/material";
import Button from "../../ui/button/Button";
import { ReactComponent as CommentIcon } from "../../../assets/icons/comment.svg";
import { ReactComponent as LikeIcon } from "../../../assets/icons/likeButton.svg";
import { likeStyles, styles } from "./styles";

type ActionsProps = {
  didLike: boolean;
  onLikeClick: () => void;
};

function Actions({ didLike, onLikeClick }: ActionsProps) {
  return (
    <Stack direction="row" sx={styles}>
      <Button
        text="Like"
        icon={<LikeIcon />}
        onClick={onLikeClick}
        sx={didLike ? likeStyles : {}}
      />
      <Button text="Comment" icon={<CommentIcon />} />
    </Stack>
  );
}

export default Actions;
