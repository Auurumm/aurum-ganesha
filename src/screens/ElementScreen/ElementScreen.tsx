import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";

export const ElementScreen = (): JSX.Element => {
  return (
    <div className="responsive-container">
      <div
        className="w-full min-h-screen bg-[linear-gradient(0deg,rgba(17,20,16,1)_0%,rgba(17,20,16,1)_100%)] relative"
        data-model-id="8334:29371"
      >
        <div className="w-full relative">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <HeaderSection />
          </div>

          <img
            className="absolute w-7 h-[25px] top-[33px] right-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
            alt="Menu"
          />

          <div className="absolute w-full h-full top-0 left-0 px-[5vw] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <img
              className="absolute w-px h-full top-0 left-[5vw] object-cover"
              alt="Line"
              src="https://c.animaapp.com/mff7swppJsPbmr/img/line-383.svg"
            />

            <img
              className="absolute w-px h-full top-0 right-[5vw] object-cover"
              alt="Line"
              src="https://c.animaapp.com/mff7swppJsPbmr/img/line-384.svg"
            />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <ContentSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <SidebarSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <MainContentSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <NavigationSection />
          </div>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};