import {
  FormLabel,
  Theme,
  Typography,
  useTheme
} from "@mui/material";
import React from "react";

interface ILabeledFormProps {
  formLabel?: string;
  children: React.ReactNode;
}

export const getStyles = (theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    mb: 1
  },
});


export const LabeledForm: React.FC<ILabeledFormProps> = ({formLabel, children}) => {
    const sx = getStyles(useTheme());
    return (
      <>
        {!!formLabel && <FormLabel><Typography sx={sx.title}>{formLabel}</Typography></FormLabel>}
        {children}
      </>
    );
  };