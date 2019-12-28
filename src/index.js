import React from "react";
import ReactDOM from "react-dom";
import Landing from "./pages/Landing";
import { starzLanding as Theme } from "./styles/starz-landing";
import { Normalize } from "styled-normalize";
import GlobalStyles from "./styles/global-styles";
import { MiniModeProvider } from "./styles/MiniModeToggle";

ReactDOM.render(
  <MiniModeProvider>
    <Normalize />
    <GlobalStyles />
    <Landing />
  </MiniModeProvider>, document.getElementById("root"));
