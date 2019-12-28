import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Dropdown } from "../Dropdown";
import Menu from "../Menu";
import { Logo } from "../Logo";
import { HeaderStyled, BurgerStyled, ListStyled } from "./styles/Styled";
import { useMiniMode } from "../../styles/MiniModeToggle";

function getLanguageSelectorItems() {
  return [
    {
      content: "English",
      value: "en"
    },
    {
      content: "العربية",
      value: "ar"
    },
    {
      content: "Français",
      value: "fr"
    }
  ];
}

function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
  const miniModeToggle = useMiniMode();

  useEffect(() => {
    document.body.classList.toggle("noScrolling", isBurgerMenuOpen);
  });

  function handleOpened() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const exploreListItem = {
    text: "Explore",
    url: "#",
    role: "link"
  };

  const toggleMiniModeListItem = {
    text: "Toggle Mini Mode",
    url: "#",
    role: "button",
    onClick: () => miniModeToggle.toggle(),
  }
  const navListItems = {};
  if (!themeContext.miniMode) {
    navListItems.explore = exploreListItem;
  }
  navListItems.toggleMiniMode = toggleMiniModeListItem;

  return (
    <HeaderStyled>
      <BurgerStyled
        isOpened={isBurgerMenuOpen}
        onClick={handleOpened}
        ariaLabel="Menu"
      />
      <Menu isOpened={isBurgerMenuOpen} />
      <Logo />
      <nav>
        <ListStyled
          data={navListItems}
          link
        />
        {!themeContext.miniMode && <Dropdown
          items={getLanguageSelectorItems()}
          icon={"languageGlobe"}
          optionsPosition={"center"}
          selectedItem={0}
        />}
      </nav>
    </HeaderStyled>
  );
}

export default Header;
