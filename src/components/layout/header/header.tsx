import { Box, IconButton, Stack } from "@mui/material";
import { leftContainerStyles, rightContainerStyles, styles } from "./styles";
import SearchField from "../../ui/search-field/SearchField";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import TabsView from "../../ui/tabs-view/TabsView";
import Avatar from "../../ui/avatar/Avatar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box sx={styles}>
      <Stack direction="row" sx={leftContainerStyles}>
        <Link to="/">
          <IconButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo />
          </IconButton>
        </Link>
        <SearchField />
      </Stack>
      <Stack direction="row" sx={rightContainerStyles}>
        <TabsView />
        <Avatar />
      </Stack>
    </Box>
  );
}

export default Header;
