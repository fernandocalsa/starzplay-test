import React, { useContext } from "react";
import {
  ButtonStyled,
  HeadingStyled,
  StickyBannerStyled
} from "./styles/Styled";
import { ThemeContext } from 'styled-components';

function StickyBanner({ className, title }) {
  const themeContext = useContext(ThemeContext);
  return (
    <StickyBannerStyled className={className}>
      {title && (
        <HeadingStyled
          rank={5}
          text={title}
          size="default"
          ariaLabelledby={title}
        />
      )}
      <ButtonStyled
        label="Email"
        icon="email"
        buttonType="secondary"
        ariaLabel="Email"
      />
      <ButtonStyled
        label="Mobile"
        icon="phone"
        buttonType="primary"
        ariaLabel="Mobile"
      />
      {!themeContext.miniMode && <ButtonStyled
        label="Facebook"
        icon="facebook"
        buttonType={"primary"}
        backgroundColor={"#4760a0"}
        ariaLabel="Facebook"
      />}
    </StickyBannerStyled>
  );
}

export default StickyBanner;
