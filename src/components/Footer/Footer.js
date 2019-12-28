import React from "react";
import FooterNav from "../FooterNav";
import { FooterStyled, LogoStyled, AppLogosStyled } from "./styles/Styled";
import HideOnMini from "../HideOnMini";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <FooterNav />
      <HideOnMini>
        <AppLogosStyled />
      </HideOnMini>
      <div>
        <small>© {currentYear}</small>
        <LogoStyled />
      </div>
    </FooterStyled>
  );
}

export default Footer;
