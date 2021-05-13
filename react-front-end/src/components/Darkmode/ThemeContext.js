import React, { useState, useLayoutEffect } from "react";

const ThemeContext = React.createContext({
  // {dark: false,
  // toggle: () => {},}
});

export default ThemeContext;

export function ThemeProvider(props) {
  // Keeps state of the current theme
  const [dark, setDark] = useState(false);

  // before it renders elements, it paints the app
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    }
    // If state changes, repaints the app
  }, [dark]);

  // Rewrites set of css variablels/colors
  const applyTheme = (theme) => {
    const html = document.getElementsByTagName("html")[0];
    html.style.cssText = theme.join(";");
  };

  const toggle = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";

    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

// styles
const lightTheme = [
  "--text: #010326;;",
  "--btnText: #f2f2f2;",
  " --btnBackground: #4e63d9;",
  " --active: #d9bb29;",
  " --inactive: #bdc4ed;",
  " --background: grey;",
  "--secondary: grey; ",
];

const darkTheme = [
  "--text: #f2f2f2;",
  "--btnText: #f2f2f2;",
  " --btnBackground: #4e63d9;",
  " --active: #d9bb29;",
  " --inactive: #bdc4ed;",
  " --background: black;",
  "--secondary: black;",
];
