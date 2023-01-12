import React from 'react';
import {FormControl, TextField} from '@mui/material';
import {
  useController,
  UseControllerReturn,
  useFormContext,
} from 'react-hook-form';

export interface InputProps {
  name: string;
  placeholder?: string;
  sx?: any
}

export const TextInput = (props: InputProps) => {
  const {control} = useFormContext();

  const controller: UseControllerReturn = useController({
    name: props.name,
    control,
  });
  console.log(controller, props)
  return (
    <FormControl fullWidth>
      <TextField
        {...controller.field}
        error={!!controller.fieldState.error}
        helperText={controller.fieldState.error?.message}
        {...props}
      />
    </FormControl>
  );
};