import React from 'react';
import {FormControl, MenuItem, Select} from '@mui/material';
import {
  useController,
  UseControllerReturn,
  useFormContext,
} from 'react-hook-form';
import {InputProps} from '../TextInput';

export interface SelectInputOption {
  value: string;
  title: string;
}

export interface SelectInputProps extends InputProps {
  options: string[];
  multiple?: boolean;
}

export const SelectInput = (props: SelectInputProps) => {
  const {control} = useFormContext();

  const controller: UseControllerReturn = useController({
    name: props.name,
    control,
  });

  return (
    <FormControl fullWidth>
      <Select
        {...controller.field}
        {...props}
      >
        {props.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};