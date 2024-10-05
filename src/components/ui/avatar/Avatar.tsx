import { Avatar as MUIAvatar } from "@mui/material";
import { styles } from "./styles";

type AvatarProps = {
  src?: string;
  alt?: string;
};

function Avatar(props: AvatarProps) {
  return <MUIAvatar sx={styles} {...props} />;
}

export default Avatar;
