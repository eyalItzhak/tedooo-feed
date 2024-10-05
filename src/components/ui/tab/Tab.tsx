import { Tab as MUITab } from "@mui/material";
import { styles } from "./styles";
import { ElementType, JSXElementConstructor } from "react";

type TabProps = {
  label: string;
  icon: React.ReactElement<unknown, string | JSXElementConstructor<any>>;
  value: number;
  component?: ElementType;
  to?: string;
  onClick?: () => void;
};

function Tab(props: TabProps) {
  return <MUITab sx={styles} iconPosition="start" {...props} />;
}

export default Tab;
