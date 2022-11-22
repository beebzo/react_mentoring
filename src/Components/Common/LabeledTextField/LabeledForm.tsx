import {
  Box,
  FormLabel,
  Select,
  TextField,
  Theme,
  Typography,
  useTheme
} from "@mui/material";
import React from "react";

interface ILabeledFormProps {
  formLabel?: string;
  isNotLast?: boolean;
  type?: React.InputHTMLAttributes<unknown>['type'];
  isSelect?: boolean;
  placeholder?: string;
  isLarge?: boolean;
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
  input: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
    "& .MuiSvgIcon-root": {color: theme.palette.primary.main}
  }
})


export const LabeledForm: React.FC<ILabeledFormProps> = ({formLabel, isLarge, placeholder, isSelect, isNotLast, type}) => {
  const sx = getStyles(useTheme());
  const largeProps = isLarge ? {multiline: true, minRows: 4}: {};
  return (
    <Box sx={isNotLast ? {...sx.container, ...sx.isNotLast}: sx.container}>
      {!!formLabel && <FormLabel><Typography sx={sx.title}>{formLabel}</Typography></FormLabel>}
      {isSelect ? (
        <Select sx={sx.input} value='' />
      ) : (
        <TextField color='primary' InputProps={{sx: sx.input}} type={type} placeholder={placeholder} {...largeProps} />)
      }
    </Box>
  )
}