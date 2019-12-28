import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Layout from "../components/Layout";
import Hero from "../components/Landing/Hero";
import WeAre from "../components/Landing/WeAre";
import Promo from "../components/Landing/Promo";
import Trending from "../components/Landing/Trending";
import { Tabs } from "../components/Tabs";
import StickyBanner from "../components/StickyBanner";
import {
  TabUser as Tab1,
  TabDevices as Tab2,
  TabDownload as Tab3
} from "../components/Landing/Tabs";

const tabsLayout = (isMiniMode) => {
  const tabs = [
    { tabTitle: "Subscription", tabIcon: "user", tabContent: <Tab1 /> },
  ];
  if (!isMiniMode) {
    tabs.push({ tabTitle: "Devices", tabIcon: "devices", tabContent: <Tab2 /> });
  }
  tabs.push({ tabTitle: "Download", tabIcon: "download", tabContent: <Tab3 /> });
  return tabs;
};

const Landing = () => {
  const themeContext = useContext(ThemeContext);
  const tabs = tabsLayout(themeContext.miniMode);

  return (
    <>
      <Layout>
        <Hero
          background={"/images/starzplay_covers"}
          heroTitle="Imagine the best entertainment all in one place"
          icon={"languageGlobe"}
          size={"largest"}
        />
        <WeAre />
        <Trending />
        <Promo
          background={"/images/promo1"}
          backgroundLocale={true}
          text="Turn your Smart TV into <strong>Brillian TV</strong>"
          direction={"end"}
        />
        <Promo
          background={"/images/promo2"}
          backgroundLocale={true}
          text="Get <strong>thousands</strong> of titles in your pocket"
          direction="start"
        />
        <Tabs layout={tabs} />
      </Layout>
      <StickyBanner title="Start your free trial. Sign up with:" />
    </>
  );
};

export default Landing;
