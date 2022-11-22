import React from "react";
import {LabeledForm, Modal} from "../../Components/Common";
import {Box, Button, FormGroup, Theme, useTheme} from "@mui/material";

interface IAddMovieModal {
  setIsOpen: (isOpen: boolean) => void
}

const getStyles = (theme: Theme) => ({
  formLine: {
    display: 'flex',
    marginTop: '24px'
  },
})

export const AddMovieModal: React.FC<IAddMovieModal> = ({setIsOpen}) => {
  const sx = getStyles(useTheme());
  const buttons = [{label: 'Reset'}, {label: 'Submit'}];
  return (
    <Modal setOpen={setIsOpen} title='Add movie' buttons={buttons}>
      <FormGroup sx={sx.formLine} row>
        <LabeledForm formLabel='Name' isNotLast />
        <LabeledForm formLabel='Release Date' type='date' />
      </FormGroup>
      <FormGroup sx={sx.formLine} row>
        <LabeledForm formLabel='Movie URL' placeholder='https://' isNotLast />
        <LabeledForm formLabel='Rating' placeholder='7.8' />
      </FormGroup>
      <FormGroup sx={sx.formLine} row>
        <LabeledForm formLabel='Genre' isNotLast isSelect />
        <LabeledForm formLabel='Runtime' placeholder='minutes' />
      </FormGroup>
      <FormGroup sx={sx.formLine}>
        <LabeledForm formLabel='Overview' placeholder='Movie description' isLarge />
      </FormGroup>
    </Modal>
  )
}