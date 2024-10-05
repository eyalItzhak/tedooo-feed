import { Tabs } from "@mui/material";
import { styles } from "./styles";
import Tab from "../tab/Tab";

import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/message.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notification.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function TabsView() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Tabs
      sx={styles}
      value={activeTab}
      onChange={(_event, value) => {
        setActiveTab(value);
      }}
    >
      <Tab
        label="Home"
        icon={<HomeIcon />}
        value={0}
        component={Link}
        to="/"
        onClick={handleHomeClick}
      />
      <Tab label="Messaging" icon={<MessageIcon />} value={1} />
      <Tab label="Notifications" icon={<NotificationIcon />} value={2} />
    </Tabs>
  );
}

export default TabsView;
