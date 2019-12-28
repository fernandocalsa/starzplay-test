import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { starzLanding, starzLandingMini } from '../starz-landing';

const MiniModeContext = React.createContext({
  toggle: () => {}
});

export const useMiniMode = () => React.useContext(MiniModeContext);

export const MiniModeProvider = ({ children }) => {
  const [isMiniMode, setisMiniMode] = React.useState(false);
 
  const toggle = () => {
    setisMiniMode(!isMiniMode);
  };

  return (
    <MiniModeContext.Provider value={{toggle}}>
      <ThemeProvider theme={isMiniMode ? starzLandingMini : starzLanding}>
        {children}
      </ThemeProvider>
    </MiniModeContext.Provider>
  )
}
