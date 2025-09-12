//실시간 순위 표시 영역
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Data for user cards
  const userCards = [
    {
      userInfo:
        "홍길동 / 남 / 23 / 율도국 / 스키학과 / 3 / 미디어 / 웹툰 / 일반 / 구글",
      stats: {
        weeks: 6,
        stars: 6,
        shields: 6,
      },
      message: "나는 기획자 중에 기획자 멋쟁이 기획자다 =!",
      hasSpecialBorder: true,
    },
    {
      userInfo:
        "홍길동 / 남 / 23 / 율도국 / 스키학과 / 3 / 미디어 / 웹툰 / 일반 / 구글",
      stats: {
        weeks: 6,
        stars: 6,
        shields: 6,
      },
      message: "나는 기획자 중에 기획자 멋쟁이 기획자다 =!",
      hasSpecialBorder: false,
    },
    {
      userInfo:
        "홍길동 / 남 / 23 / 율도국 / 스키학과 / 3 / 미디어 / 웹툰 / 일반 / 구글",
      stats: {
        weeks: 6,
        stars: 6,
        shields: 6,
      },
      message: "나는 기획자 중에 기획자 멋쟁이 기획자다 =!",
      hasSpecialBorder: false,
    },
    {
      userInfo:
        "홍길동 / 남 / 23 / 율도국 / 스키학과 / 3 / 미디어 / 웹툰 / 일반 / 구글",
      stats: {
        weeks: 6,
        stars: 6,
        shields: 6,
      },
      message: "나는 기획자 중에 기획자 멋쟁이 기획자다 =!",
      hasSpecialBorder: true,
    },
  ];

  // Data for ranking badges
  const rankingBadges = [
    {
      rank: 1,
      bgColor: "bg-[#f0b04a]",
      leftPosition: "left-[25px]",
      hasRectangles: true,
    },
    {
      rank: 2,
      bgColor: "bg-[#cccccc]",
      leftPosition: "left-[510px]",
      hasRectangles: false,
    },
    {
      rank: 3,
      bgColor: "bg-[#d78b3f]",
      leftPosition: "left-[995px]",
      hasRectangles: false,
    },
  ];

  return (
    <section className="w-full relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <header className="text-center mb-[127px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-cpwhite text-[length:var(--CP-h3-font-size)] tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] whitespace-nowrap [font-style:var(--CP-h3-font-style)]">
          실시간 순위
        </h2>
      </header>

      <div className="relative">
        <div className="flex items-center justify-center gap-[15px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {userCards.map((card, index) => (
            <Card
              key={`user-card-${index}`}
              className={`flex flex-col w-[470px] items-start relative bg-transparent border-none ${card.hasSpecialBorder ? "rounded-[0px_0px_0px_2020px]" : ""}`}
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col h-[185px] items-center justify-end gap-2.5 px-[25px] py-5 relative self-stretch w-full rounded-[20px_20px_0px_0px] border border-solid border-[#ffffff26] bg-[linear-gradient(180deg,rgba(0,0,0,0)_15%,rgba(0,0,0,0.5)_100%)]">
                  <div className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpwhite text-[length:var(--CP-btn-text-font-size)] tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                    {card.userInfo}
                  </div>
                </div>

                <div className="flex flex-col h-[169px] items-start gap-2.5 px-[17px] py-5 relative self-stretch w-full bg-cpbg-black rounded-[0px_0px_20px_20px] border border-solid border-[#ffffff26]">
                  <div className="flex flex-col w-[435px] items-center gap-3.5 relative flex-[0_0_auto] mb-[-5.00px]">
                    <div className="inline-flex items-center gap-[98px] relative flex-[0_0_auto]">
                      <div className="flex flex-col w-[51px] items-center relative">
                        <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                          {card.stats.weeks}
                        </div>
                        <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body1-font-size)] tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                          누적 주차
                        </div>
                      </div>

                      <div className="flex flex-col w-[51px] items-center relative">
                        <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                          {card.stats.stars}
                        </div>
                        <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                          별
                        </div>
                      </div>

                      <div className="flex flex-col w-[51px] items-center relative">
                        <div className="relative self-stretch mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] [font-style:var(--CP-h1-font-style)]">
                          {card.stats.shields}
                        </div>
                        <div className="relative self-stretch font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                          방패
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2.5 px-5 py-[11px] relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.6)_100%)]">
                      <div className="relative w-[391px] h-[35px] mt-[-1.00px] font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--CP-body3-font-style)]">
                        {card.message}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ranking badges */}
        {rankingBadges.map((badge, index) => (
          <div
            key={`ranking-badge-${index}`}
            className={`absolute w-[73px] ${badge.rank === 1 ? "h-[88px]" : "h-[71px]"} top-5 ${badge.leftPosition} shadow-[0px_4px_10px_#0000004c] translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${600 + index * 200}ms`,
              } as React.CSSProperties
            }
          >
            <div
              className={`relative w-[69px] ${badge.rank === 1 ? "h-[88px]" : "h-[69px]"} top-px left-px ${badge.rank === 1 ? "" : "bg-[url(https://c.animaapp.com/mff7swppJsPbmr/img/star-21.svg)] bg-[100%_100%]"}`}
            >
              {badge.hasRectangles && (
                <>
                  <img
                    className="left-2 absolute w-7 h-[43px] top-11"
                    alt="Rectangle"
                    src="https://c.animaapp.com/mff7swppJsPbmr/img/rectangle-34625610.svg"
                  />
                  <img
                    className="left-8 absolute w-7 h-[43px] top-11"
                    alt="Rectangle"
                    src="https://c.animaapp.com/mff7swppJsPbmr/img/rectangle-34625611.svg"
                  />
                  <img
                    className="absolute w-[69px] h-[69px] top-0 left-0"
                    alt="Star"
                    src="https://c.animaapp.com/mff7swppJsPbmr/img/star-21.svg"
                  />
                </>
              )}

              <div
                className={`absolute w-[45px] h-[45px] top-3 left-3 ${badge.bgColor} rounded-[22.5px]`}
              />

              <div
                className={`absolute top-[17px] ${badge.rank === 1 ? "left-[25px]" : "left-[23px]"} [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[35px] tracking-[-1.05px] leading-[35px] whitespace-nowrap`}
              >
                {badge.rank}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
