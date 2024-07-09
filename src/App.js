import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styledComponents/defaultStyles";
import { darkTheme, lightTheme } from "./styledComponents/themeStyles";
import Route from "./structure/route"
import "./styles/global.css"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  const isSignedIn = useSelector(state => state.auth.isSignedIn)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login")
    }
    console.log({pathname});
  }, [isSignedIn])

  return (
    <>
      {isSignedIn || pathname === "/login" ? <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyle />
          <Route />
        </ThemeProvider>
      </ThemeContext.Provider> : "Loading"

      }
    </>
  );
};

export default App;