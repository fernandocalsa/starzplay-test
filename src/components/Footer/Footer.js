import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";

function Footer() {
  const themeContext = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <FooterNav />
      {!themeContext.miniMode && <AppLogosStyled />}
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
