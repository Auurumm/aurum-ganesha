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
        {/* Background lines - positioned behind content */}
        <div className="absolute w-full h-full top-0 left-0 px-[5vw] pointer-events-none">
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

        {/* Main content flow */}
        <div className="w-full relative z-10">
          {/* Header Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <HeaderSection />
          </div>

          {/* Menu icon */}
          <img
            className="absolute w-7 h-[25px] top-[33px] right-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] z-20"
            alt="Menu"
          />

          {/* Content Section with proper spacing */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="py-20"> {/* Add spacing around ContentSection */}
              <ContentSection />
            </div>
          </div>

          {/* Other sections with spacing */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <SidebarSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <MainContentSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
            <NavigationSection />
          </div>

          {/* Footer */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};