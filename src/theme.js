import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "rgba(255, 255, 255, 1)",
      default: "#fafafa"
    },
    primary: {
      light: "#4dabf5",
      main: "#2196f3",
      dark: "#1769aa",
      contrastText: "#fff"
    },
    secondary: {
      light: "#6fbf73",
      main: "#4caf50",
      dark: "#357a38",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "rgba(255, 0, 3, 1)",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});


export default theme;
