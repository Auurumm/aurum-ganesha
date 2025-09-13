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
        {/* 히어로 섹션 배경 */}
        <div
          className="absolute inset-0 bg-cover bg-center -scale-x-100"
          style={{
            backgroundImage: "url('/assets/backgrounds/header.png')",
            backgroundSize: "1920px auto",
            backgroundPosition: "center 75%",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* WISDOM 텍스트 섹션 */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-auto inline-flex flex-col items-center">
            <div className="text-white text-6xl font-bold font-['Chakra_Petch'] uppercase leading-[70px]">
              Wisdom
            </div>
            <div className="text-neutral-400 text-xl font-semibold font-['Pretendard'] leading-9 whitespace-nowrap">
              영상을 보고, 위즈덤을 작성해서 활동을 완료해 주세요
            </div>
          </div>
        </div>

        {/* 네비게이션 바 */}
        <header
          id="wisdom-header"
          className="absolute w-full h-24 top-0 left-0 bg-stone-900/60 border-b border-white/20 backdrop-blur-[6px] z-20"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <nav className="inline-flex items-center gap-[60px]">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="text-white text-base font-bold font-['Chakra_Petch'] uppercase h-auto p-0 hover:bg-transparent hover:text-white/80 transition-colors"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* 좌측 상단 로고 (SVG) */}
          <div id="wisdom-logo" className="absolute w-9 h-6 top-7 left-[22px]">
            <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8334_29616)">
                <path d="M9.60339 25.1065C5.91908 24.9626 3.25619 24.7323 2.6998 24.3937C1.65623 23.7584 0.867332 21.8937 0.427668 19.5648C0.049364 17.5626 -0.095499 15.1774 0.064127 12.9514C0.226521 10.6811 0.709551 8.55199 1.58842 7.10889C2.21539 6.07871 3.04535 5.38023 4.10691 5.17954C5.60536 4.89674 14.7114 4.72419 23.5153 4.73342L34.7099 0L29.934 4.77586L26.3097 8.39974C24.9958 8.39513 23.6491 8.39374 22.3034 8.39513C14.3041 8.40528 6.34813 8.52615 5.27135 8.75037C4.92303 8.8228 4.63331 9.09268 4.39571 9.49867C3.79827 10.5192 3.55652 12.2644 3.53207 14.1094C3.50716 16.006 3.71799 17.9851 4.01556 19.4153C4.2144 20.3712 4.39064 21.0037 4.48798 21.0605C4.91888 21.3128 8.47171 21.4651 13.1659 21.544L9.60293 25.1065H9.60339Z" fill="#ADFF00"/>
                <path d="M41.1257 5.3015C42.4853 5.69226 43.4357 7.25761 43.9985 9.35674C44.4492 11.0393 44.6688 13.1024 44.6568 15.1554C44.6448 17.2121 44.4013 19.2632 43.9261 20.9172C43.3452 22.9393 42.3916 24.4289 41.0454 24.7897C39.8907 25.0988 30.3408 25.3203 21.0959 25.3L9.9834 29.9988L14.7399 25.2423L18.3836 21.599C27.8205 21.6535 38.6169 21.4703 39.6143 21.2466C40.1103 21.1354 40.5329 19.9972 40.8244 18.4614C41.0403 17.3242 41.152 16.0034 41.1488 14.6968C41.1455 13.3958 41.0293 12.1114 40.788 11.0402C40.4973 9.74658 40.0669 8.81558 39.5036 8.70855C38.8028 8.57568 35.6647 8.48572 31.5458 8.43681L35.1037 4.87891C38.2021 4.97118 40.4604 5.10958 41.1266 5.30104" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.376 12.8398H19.281C19.8784 12.8398 20.367 13.3284 20.367 13.9259V16.0979C20.367 16.6953 19.8784 17.1839 19.281 17.1839H10.376C9.77861 17.1839 9.29004 16.6953 9.29004 16.0979V13.9259C9.29004 13.3284 9.77861 12.8398 10.376 12.8398Z" fill="#ADFF00"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25.3751 12.8398H34.2805C34.8779 12.8398 35.3665 13.3284 35.3665 13.9259V16.0979C35.3665 16.6953 34.8779 17.1839 34.2805 17.1839H25.3751C24.7776 17.1839 24.2891 16.6953 24.2891 16.0979V13.9259C24.2891 13.3284 24.7776 12.8398 25.3751 12.8398Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_8334_29616">
                  <rect width="44.6565" height="30" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* 햄버거 메뉴 (클리핑) */}
          <div
            data-hamburger
            className="absolute top-[30px] right-[30px] w-7 h-5 overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col items-center gap-[3px]">
              <div className="w-3.5 h-1 bg-white" />
              <div className="w-7 h-1 bg-white" />
              <div className="w-3.5 h-1 bg-white" />
            </div>
          </div>
        </header>

        {/* 히어로 하단 수평선 */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/20 z-20" />

        {/* 의사요소·주입 이미지 차단 (로고 SVG는 영향 없음) */}
        <style jsx>{`
          /* 헤더 자체/햄버거에 붙는 before/after 제거 */
          #wisdom-header::before,
          #wisdom-header::after,
          #wisdom-header [data-hamburger]::before,
          #wisdom-header [data-hamburger]::after {
            content: none !important;
            display: none !important;
            background: none !important;
            border: none !important;
            box-shadow: none !important;
          }
          /* 헤더 내부에 주입되는 img 요소(확장/스크립트용 배지 등) 전부 숨김 */
          #wisdom-header img {
            display: none !important;
          }
        `}</style>
      </div>
    </section>
  );
};
