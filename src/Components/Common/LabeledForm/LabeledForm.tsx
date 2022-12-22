import {
  Box,
  FormLabel,
  Theme,
  Typography,
  useTheme
} from "@mui/material";
import React from "react";

interface ILabeledFormProps {
  formLabel?: string;
  isNotLast?: boolean;
  children: React.ReactNode;
}

export const getStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  isNotLast: {
    flex: 2,
    marginRight: '18px'
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
});


export const LabeledForm: React.FC<ILabeledFormProps> = ({formLabel, isNotLast, children}) => {
    const sx = getStyles(useTheme());
    return (
      <Box sx={isNotLast ? {...sx.container, ...sx.isNotLast} : sx.container}>
        {!!formLabel && <FormLabel><Typography sx={sx.title}>{formLabel}</Typography></FormLabel>}
        {children}
      </Box>
    );
  };