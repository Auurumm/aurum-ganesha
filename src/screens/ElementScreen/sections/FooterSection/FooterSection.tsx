import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const footerLinks = {
  usefulLinks: ["Home", "About Us", "Appointment", "Services", "Blog"],
  utilityPages: [
    "FAQ/Return",
    "Privacy/Terms",
    "Gift Cards",
    "Sizing Guide",
    "Accessibility",
  ],
  miscellaneous: ["Community", "FAQs", "License", "Privacy", "Contact Us"],
};

const appStoreButtons = [
  {
    bgImage: "https://c.animaapp.com/mff7swppJsPbmr/img/rectangle-176-1.svg",
    logoSrc: "",
    iconSrc: "",
    text: "Get it on",
  },
  {
    bgImage: "https://c.animaapp.com/mff7swppJsPbmr/img/rectangle-176.svg",
    logoSrc: "",
    iconSrc: "",
    text: "Get it on",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent relative translate-y-[-1rem] animate-fade-in opacity-0">
      <Separator className="w-full h-px bg-gray-600" />

      <div className="container mx-auto px-60 py-[150px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="mb-4">
              <img className="w-[179px] h-[104px]" alt="Logo" />
            </div>

            <p className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] mb-8">
              Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi.
              Nulla sit amet suscipit dolormentum mauris in, rutrum augue.
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              {appStoreButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 bg-transparent hover:bg-transparent"
                >
                  <div
                    className={`w-[${index === 0 ? "204px" : "184px"}] h-[69px] bg-[url(${button.bgImage})] bg-[100%_100%] relative flex items-center`}
                  >
                    <div className="absolute left-[22px] w-[35px] h-[39px]">
                      <img alt="App icon" />
                    </div>
                    <div className="absolute left-[${index === 0 ? '72px' : '63px'}] flex flex-col">
                      <div className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                        {button.text}
                      </div>
                      <div className="w-[${index === 0 ? '105px' : '98px'}] h-[21px]">
                        <img alt="Store logo" />
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] mb-11">
              USEFUL LINKS
            </h4>
            <nav className="space-y-0">
              {footerLinks.usefulLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 justify-start font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)] hover:text-white transition-colors"
                >
                  {link}
                </Button>
              ))}
            </nav>
          </div>

          {/* Utility Pages */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] mb-11">
              UTILITY PAGES
            </h4>
            <nav className="space-y-0">
              {footerLinks.utilityPages.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 justify-start font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)] hover:text-white transition-colors"
                >
                  {link}
                </Button>
              ))}
            </nav>
          </div>

          {/* Miscellaneous */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] mb-11">
              MISCELLANEOUS
            </h4>
            <nav className="space-y-0">
              {footerLinks.miscellaneous.slice(0, -1).map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto p-0 justify-start font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)] hover:text-white transition-colors"
                >
                  {link}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="h-auto p-0 justify-start [font-family:'Sora',Helvetica] font-normal text-[#bababa] text-base leading-4 tracking-[0] hover:text-white transition-colors"
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      </div>

      <Separator className="w-full h-px bg-gray-600" />

      {/* Bottom Section */}
      <div className="container mx-auto px-60 py-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left side - Privacy and Terms */}
          <div className="flex items-center gap-[30px]">
            <Button
              variant="ghost"
              className="h-auto p-0 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] hover:text-white transition-colors"
            >
              Privacy policy
            </Button>

            <img
              className="w-px h-[17px] object-cover"
              alt="Line"
              src="https://c.animaapp.com/mff7swppJsPbmr/img/line-398.svg"
            />

            <Button
              variant="ghost"
              className="h-auto p-0 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Button>
          </div>

          {/* Center - Copyright */}
          <div className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            ©Designthemes all rights Reserved
          </div>

          {/* Right side - Social Media */}
          <div className="w-[255px] h-[39px]">
            <img alt="Social media icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};
