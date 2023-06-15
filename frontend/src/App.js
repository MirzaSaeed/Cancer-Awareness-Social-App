import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppStarter from "./components/AppStarter";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1A202E",
      background: "#11141b",
      selectedBG: "#0f131c",
      selected: "#5260be",
      SidebarBG: "#1b202c",
      button: "#3f51b5",
    },
    background: {
      default: "#FFF8E1",
    },
    text: {
      main: "#ffff",
      secondary: "#757575",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStarter  />
    </ThemeProvider>
  );
};

export default App;
