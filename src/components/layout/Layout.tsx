import { Box, Stack } from "@mui/material";
import Header from "./header/header";
import { styles } from "./styles";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Stack sx={styles}>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Stack>
  );
}

export default Layout;
