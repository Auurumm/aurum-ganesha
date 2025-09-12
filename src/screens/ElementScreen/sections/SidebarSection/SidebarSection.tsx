//1단계 위즈덤 작성 영역 (타이머, 영상, 버튼)
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SidebarSection = (): JSX.Element => {
  const timeUnits = [
    { value: "2", label: "일", className: "px-[33px]" },
    { value: "39", label: "시", className: "px-6" },
    { value: "00", label: "", className: "px-6" },
    { value: "44", label: "초", className: "px-6" },
  ];

  return (
    <section className="flex flex-col w-full px-[5%] items-center gap-[61px] py-20">
      {/* 1단계 제목과 타이머 */}
      <div className="flex flex-col w-full max-w-[544px] items-center gap-[50px] relative">
        <header className="inline-flex flex-col items-center gap-5 relative">
          <div className="flex flex-col items-center relative w-full">
            <h2 className="relative w-full font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-[#adff00] text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] [font-style:var(--CP-h3-font-style)]">
              1단계
            </h2>

            <h3 className="relative w-fit font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-cpwhite text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] whitespace-nowrap [font-style:var(--CP-h3-font-style)]">
              위즈덤 카드 작성하기
            </h3>
          </div>
        </header>

        {/* 타이머 */}
        <div className="flex flex-col w-full max-w-[411px] items-center gap-5 relative">
          <div className="flex items-center gap-[25px] relative w-full justify-center">
            {timeUnits.map((unit, index) => (
              <div
                key={index}
                className="flex flex-col w-[84px] items-center gap-2.5 relative"
              >
                <Card className="flex flex-col h-[84px] items-center justify-center gap-2.5 py-[21px] relative w-full rounded-[42px] border border-solid border-[#ffffff33] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] bg-transparent">
                  <CardContent
                    className={`flex items-center justify-center p-0 ${unit.className}`}
                  >
                    <span className="relative w-fit font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-[#adff00] text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                      {unit.value}
                    </span>
                  </CardContent>
                </Card>

                {unit.label ? (
                  <span className="relative font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body1-font-size)] text-center tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] [font-style:var(--CP-body1-font-style)]">
                    {unit.label}
                  </span>
                ) : (
                  <img
                    className="relative w-full h-[11.61px]"
                    alt="Separator"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="relative font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-[#adff00] text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] [font-style:var(--CP-body3-font-style)]">
            남았어요 ! 얼른 작성해보세요
          </p>
        </div>
      </div>

      {/* 영상과 텍스트 영역 - 전체 너비 사용 */}
      <div className="flex items-center gap-5 relative w-full">
        {/* 영상 영역 - 비율 유지하면서 확장 */}
        <div className="flex flex-1 h-[498px] items-center justify-center gap-2.5 relative border border-solid border-[#ffffff26] bg-[linear-gradient(0deg,rgba(59,66,54,0.4)_0%,rgba(59,66,54,0.4)_100%)]">
          <Button
            variant="ghost"
            size="icon"
            className="relative w-[120px] h-[120px] bg-[#1c1e1899] rounded-[60px] border border-solid border-[#adff00] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] hover:bg-[#1c1e18cc] transition-colors"
          >
            <img
              className="w-[34px] h-[39px]"
              alt="Play button"
              src="https://c.animaapp.com/mff7swppJsPbmr/img/polygon-1.svg"
            />
          </Button>
        </div>

        {/* 텍스트 영역 - 비율 유지하면서 확장 */}
        <article className="flex flex-col flex-1 max-w-[534px] items-start relative">
          <div className="flex flex-col h-[388px] items-start gap-2.5 relative w-full">
            <h1 className="relative w-full font-CP-h2 font-[number:var(--CP-h2-font-weight)] text-cpwhite text-[length:var(--CP-h2-font-size)] tracking-[var(--CP-h2-letter-spacing)] leading-[var(--CP-h2-line-height)] [font-style:var(--CP-h2-font-style)]">
              이색 미니 보험의 등장
            </h1>

            <p className="relative w-full h-[241px] font-CP-body2 font-[number:var(--CP-body2-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body2-font-size)] tracking-[var(--CP-body2-letter-spacing)] leading-[var(--CP-body2-line-height)] [font-style:var(--CP-body2-font-style)]">
              이번 영상은 &quot;요즘 보험&quot;에 대한 트렌드를 다루고 있어요.
              아이돌 덕질하다 다치거나, 책을 오래 읽다가 시력이 나빠지는 등의
              일상 속 예상 못한 상황을 보장해주는 &apos;미니 보험&apos; 상품에
              대한 내용이에요. &apos;우리 서비스에도 이런 개인화된 접근을 할 수
              있을까?&apos; 고민해볼 수 있는 좋은 사례예요. 이번주 위즈덤도
              화이팅~! 💪
            </p>
          </div>

          <div className="flex flex-col items-start gap-[15px] relative w-full">
            <div className="inline-flex items-center justify-center gap-[5px] relative">
              <img
                className="relative w-6 h-6"
                alt="Calendar icon"
                src="https://c.animaapp.com/mff7swppJsPbmr/img/frame-2121457746.svg"
              />

              <time className="relative w-fit font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
                2025. 09. 08 (월) ~ 2025. 09. 12 (목) 23:59
              </time>
            </div>

            <Button
              className="flex w-full h-[60px] items-center justify-center gap-2.5 px-[201px] py-3 relative bg-[#adff00] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] hover:bg-[#9ee600] transition-colors h-auto"
              variant="default"
            >
              <span className="relative w-fit font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-black text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
                위즈덤 작성하기
              </span>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};