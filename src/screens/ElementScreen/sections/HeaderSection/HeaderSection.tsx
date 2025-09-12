import { MenuIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "HOME", href: "#" },
  { label: "WISDOM", href: "#" },
  { label: "LIBRARY", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "SHOP", href: "#" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[493px]">
      <div className="relative h-[493px] bg-[100%_100%]">
        
        {/* 히어로 섹션 배경 이미지 (top: 90px ~ top: 493px, 높이 403px) */}
        <div 
          className="absolute top-[90px] left-0 w-full h-[493px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/backgrounds/header.png')",
            backgroundPosition: "center 60%",
            transform: "scaleX(-1)"
          }}
        >
          {/* 더 진한 오버레이로 텍스트 가독성 향상 */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* 기존 WISDOM 텍스트 (배경 이미지 위에 표시) */}
        <div className="absolute inset-x-0 top-[clamp(120px,12vh,260px)] z-10">
          <div
            className="
              mx-auto w-full px-4
              max-w-[848px]
              xl:max-w-[1100px]
              2xl:max-w-[1280px]
              flex flex-col items-center
            "
          >
            {/* 타이틀 박스 높이도 단계적으로 확대 */}
            <div className="relative w-full h-[clamp(140px,22vw,233px)] xl:h-[260px] 2xl:h-[300px]">
              <h1
                className="
                  absolute inset-0 flex items-center justify-center text-center text-cpwhite drop-shadow-2xl
                  /* 유동 타이포: 최소~vw~최대 */
                  text-[clamp(32px,6vw,64px)]
                  xl:text-[clamp(40px,6vw,80px)]
                  2xl:text-[clamp(48px,6vw,96px)]
                  font-h2 font-[number:var(--h2-font-weight)]
                  tracking-[var(--h2-letter-spacing)]
                  leading-[var(--h2-line-height)]
                  [font-style:var(--h2-font-style)]
                "
              >
                WISDOM
              </h1>
            </div>

            <p
              className="
                mt-3 text-center drop-shadow-lg
                w-[min(500px,90vw)] xl:w-[min(640px,70vw)] 2xl:w-[min(720px,60vw)]
                text-[clamp(14px,2.2vw,18px)] xl:text-[clamp(16px,1.8vw,20px)]
                leading-[clamp(20px,3vw,28px)] xl:leading-[clamp(24px,2.6vw,32px)]
                font-CP-body3 font-[number:var(--CP-body3-font-weight)]
                text-cpbody-seconary-text
                [font-style:var(--CP-body3-font-style)]
              "
            >
              영상을 보고, 위즈덤을 작성해서 활동을 완료해 주세요
            </p>
          </div>
        </div>


      {/* 네비게이션 바 (배경 이미지 위에 표시) */}
      <header className="absolute w-full h-[90px] top-0 left-0 bg-[#1c1f1899] border-b border-[#ffffff26] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] z-20">
        <div className="absolute w-[486px] h-[11px] top-[38px] left-1/2 transform -translate-x-1/2">
          <nav className="inline-flex items-start gap-[60px] relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            {navigationItems.map((item, index) => (
              <Button
                key={item.label}
                variant="ghost"
                className="relative w-fit mt-[-1.00px] font-button-text font-[number:var(--button-text-font-weight)] text-white text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] whitespace-nowrap [font-style:var(--button-text-font-style)] h-auto p-0 hover:bg-transparent hover:text-white/80 transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <img
          className="absolute w-[45px] h-[30px] top-7 left-[22px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]"
          alt="Logo"
          src="https://c.animaapp.com/mff7swppJsPbmr/img/logo.svg"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute w-7 h-[25px] top-8 right-[59px] p-0 hover:bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]"
        >
          <MenuIcon className="w-7 h-[25px] text-white" />
        </Button>
      </header>
    </div>        {/* ← 여기 div 닫기 */}
  </section>
  );             {/* ← return 닫기 */}
};               {/* ← 함수 닫기 */}
