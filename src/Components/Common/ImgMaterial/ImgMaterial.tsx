import React from "react";
import {Box, BoxProps} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type ImgMaterialProps = {
  alt: string;
  src: string;
  objectFit?: string;
  sx?: SxProps<Theme>
}

export const ImgMaterial = (props: BoxProps & ImgMaterialProps) => <Box component='img' {...props} />;