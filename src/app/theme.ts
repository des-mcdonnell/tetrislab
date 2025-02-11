'use client'

import { createTheme } from "@mui/material/styles";

const tetrisLabTheme = createTheme({
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    }
  }
});

export default tetrisLabTheme;