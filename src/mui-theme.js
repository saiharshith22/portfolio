import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {},
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
