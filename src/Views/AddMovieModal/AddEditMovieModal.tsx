import React from "react";
import {LabeledForm, Modal} from "../../Components/Common";
import {FormGroup, Theme, useTheme} from "@mui/material";
import {toggler} from "../../consts/types/toggler";

interface IAddEditMovieModal {
  setIsOpen: toggler;
  isEdit?: boolean;
}

const getStyles = (theme: Theme) => ({
  formLine: {
    display: 'flex',
    marginTop: '24px'
  },
})

export const AddEditMovieModal: React.FC<IAddEditMovieModal> = ({setIsOpen, isEdit}) => {
  const sx = getStyles(useTheme());
  const buttons = [{label: 'Reset'}, {label: 'Submit'}];
  return (
    <Modal setOpen={setIsOpen} title={`${isEdit ? 'Edit' : 'Add'} movie`} buttons={buttons}>
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