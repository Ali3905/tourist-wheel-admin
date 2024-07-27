import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styledComponents/defaultStyles";
import { darkTheme, lightTheme } from "./styledComponents/themeStyles";
import Route from "./structure/route"
import "./styles/global.css"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserAsync } from "./redux/authSlice";
import { user } from "@nextui-org/react";
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  const { isSignedIn, user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isSignedIn) {
     return  navigate("/login")
    }
    getUserAsync()
    if (!user) {
      return  navigate("/login")
    }
    
  }, [isSignedIn])

  return (
    <>
      {( isSignedIn && user ) || pathname === "/login"  ? <ThemeContext.Provider value={{ setTheme, theme }}>
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