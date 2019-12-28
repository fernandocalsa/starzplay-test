import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

const HideOnMini = (props) => {
  const themeContext = useContext(ThemeContext);

  if (themeContext.miniMode) {
    return null;
  }
  return props.children;
}

export default HideOnMini;
