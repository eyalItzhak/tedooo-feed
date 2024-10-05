import { InputAdornment, TextField } from "@mui/material";
import { styles } from "./styles";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

type SearchFieldProps = {
  showIcon?: boolean;
  text?: string;
};

function SearchField({ showIcon = true, text = "Search" }: SearchFieldProps) {
  return (
    <TextField
      sx={styles}
      variant="standard"
      placeholder={text}
      slotProps={
        showIcon
          ? {
              input: {
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }
          : undefined
      }
    />
  );
}

export default SearchField;
