import {Theme} from "@mui/material";

export const getCommonStyles = (theme: Theme) => ({
  input: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
    "& .MuiSvgIcon-root": {color: theme.palette.primary.main}
  }
});