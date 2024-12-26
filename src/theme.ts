import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      // '-Apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
    ].join(","),
  },
});

theme = responsiveFontSizes(theme);
