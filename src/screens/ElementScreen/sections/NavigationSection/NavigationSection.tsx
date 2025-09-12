//위즈덤 카드들과 표현 행위 카드들
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const expressionCards = [
  {
    title: "경의",
    subtitle: "Honor",
    count: "1장",
    description:
      "최고' 의 지혜를 뽐내는 1명에게 부여하는 나의 '감탄' 입니다. :)",
    subDescription:
      "1명 밖에 선택할 수 없으니, 신중하게 나의 경의를 표현해보세요!",
    rotation: "rotate-[-15deg]",
    position: "top-[30px] left-[47px]",
  },
  {
    title: "추천",
    subtitle: "Recommend",
    count: "3장",
    description:
      "다른 사람들에게도 보여주고 싶은 3명의 지혜를 뽑는 나의 '추천' 입니다.",
    subDescription:
      "3명을 선택할 수 있으니, 동료 크루의 지혜에 감탄을 보내주세요!",
    rotation: "rotate-[15deg]",
    position: "top-[31px] left-[47px]",
  },
  {
    title: "존중",
    subtitle: "Respect",
    count: "5장",
    description:
      "나의 지혜와 완전히 같지는 않지만 새로운 관점과 재미를 준 지혜를 뽑는 나의 '존중' 입니다.",
    subDescription: "5명을 골라, 소소한 존중을 표현해보자구요!",
    rotation: "rotate-[-15deg]",
    position: "top-[30px] left-80",
  },
  {
    title: "응원",
    subtitle: "Hug",
    count: "3장",
    description:
      "조금 더 분발한다면 더 좋은 지혜에 도전해볼 수 있을 지혜를 뽑는 나의 '응원' 입니다.",
    subDescription: "3명을 골라, 힘차게 어깨를 주물러 주자구요!",
    rotation: "rotate-[15deg]",
    position: "top-[31px] left-[945px]",
  },
];

const wisdomCards = Array(12)
  .fill(null)
  .map((_, index) => ({
    id: index,
    avatar: "",
    userInfo:
      "홍길동 / 남 / 23 / 한국대 / 표범학과 / 3 / 미디어 / 웹툰 / 일반 / 구글",
    content: [
      "미니 보험은 1만 원 이하의 적은 보험료로 1년 미만의 짧은 보험을 말한다. 해당",
      "2030세대 라이프스타일을 반영한 미니보험에 '게임화(게이미피케이션) 요소'를 보험 가입 및",
      "최근 미니보험은 생활 밀착형 콘셉트로 2030 세대의 눈길을 사로잡고 있다.",
    ],
    timestamp: "2025. 09. 09(화) 19:18",
    reactions: [
      { icon: "", label: "경의", count: 22 },
      { icon: "", label: "추천", count: 8 },
      { icon: "", label: "존중", count: 10 },
      { icon: "", label: "응원", count: 2 },
    ],
  }));

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-[85px] relative">
      <div className="flex flex-col items-center gap-20 relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <header className="flex flex-col items-center gap-[50px] relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex flex-col max-w-[628px] items-center relative">
            <div className="flex flex-col items-center relative w-full">
              <h2 className="relative w-full mt-[-1.00px] font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-[#adff00] text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] [font-style:var(--CP-h3-font-style)]">
                2단계
              </h2>
              <h3 className="relative w-full font-CP-h3 font-[number:var(--CP-h3-font-weight)] text-cpwhite text-[length:var(--CP-h3-font-size)] text-center tracking-[var(--CP-h3-letter-spacing)] leading-[var(--CP-h3-line-height)] [font-style:var(--CP-h3-font-style)]">
                다른 크루들의 위즈덤 카드
              </h3>
            </div>
            <p className="relative w-full font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body3-font-size)] text-center tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] [font-style:var(--CP-body3-font-style)]">
              다른 크루의 위즈덤 카드를 읽어보고, 표현 행위를 진행해 주세요.
              <br />
              표현 행위 카드는 총 12장이며, 각각의 의미를 확인하고 2단계를
              완료하세요 !
            </p>
          </div>
        </header>
      </div>

      <div className="relative w-full max-w-[1278px] h-[465px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="relative w-full h-full">
          {expressionCards.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col w-[285px] h-[404px] items-start gap-[34px] px-[30px] py-[50px] absolute ${card.position} bg-cpbg-black rounded-[20px] border border-solid border-[#666666] ${card.rotation}`}
            >
              <CardContent className="flex flex-col w-[225px] items-start gap-[34px] relative p-0">
                <div className="relative w-[100px] h-[100px] bg-[#3b4236] rounded-[100px] overflow-hidden shadow-shadow-1">
                  <img
                    className="w-[92px] absolute h-[92px] top-2.5 left-[3px] rotate-[15deg] object-cover"
                    alt="Crown perspective"
                  />
                </div>
                <div className="flex flex-col items-start gap-[15px] relative w-full">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="inline-flex items-center justify-center gap-2 relative">
                      <h4 className="relative w-fit mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[length:var(--CP-h1-font-size)] tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                        {card.title}
                      </h4>
                      <span className="relative w-fit font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpbody-text text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
                        {card.subtitle}
                      </span>
                    </div>
                    <span className="relative w-fit font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
                      {card.count}
                    </span>
                  </div>
                  <div className="relative w-full [font-family:'Pretendard-Regular',Helvetica] font-normal text-body-text-color text-lg leading-[18px]">
                    <span className="tracking-[-0.10px] leading-[27px]">
                      {card.description}
                      <br />
                    </span>
                    <span className="font-CP-body2 font-[number:var(--CP-body2-font-weight)] tracking-[var(--CP-body2-letter-spacing)] leading-[var(--CP-body2-line-height)] [font-style:var(--CP-body2-font-style)] text-[length:var(--CP-body2-font-size)]">
                      {card.subDescription}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[15px] relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center gap-[15px] relative w-full"
          >
            {wisdomCards
              .slice(rowIndex * 3, (rowIndex + 1) * 3)
              .map((card, cardIndex) => (
                <Card
                  key={card.id}
                  className="inline-flex flex-col items-center gap-[35px] p-[25px] relative flex-1 bg-[#3b4236] rounded-[20px] border border-solid border-[#141612]"
                >
                  <CardContent className="flex flex-col items-center gap-5 relative w-full p-0">
                    <div className="inline-flex flex-col items-start gap-[18px] relative">
                      <div className="inline-flex items-center gap-[15px] relative">
                        <Avatar className="relative w-[50px] h-[50px]">
                          <AvatarImage src={card.avatar} alt="User avatar" />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span className="relative w-fit font-CP-body1 font-[number:var(--CP-body1-font-weight)] text-cpbody-seconary-text text-[length:var(--CP-body1-font-size)] tracking-[var(--CP-body1-letter-spacing)] leading-[var(--CP-body1-line-height)] whitespace-nowrap [font-style:var(--CP-body1-font-style)]">
                          {card.userInfo}
                        </span>
                      </div>
                      <div className="flex flex-col w-[408px] items-start gap-[15px] relative">
                        {card.content.map((text, textIndex) => (
                          <p
                            key={textIndex}
                            className="relative w-full font-CP-body-4 font-[number:var(--CP-body-4-font-weight)] text-cpwhite text-[length:var(--CP-body-4-font-size)] tracking-[var(--CP-body-4-letter-spacing)] leading-[var(--CP-body-4-line-height)] [font-style:var(--CP-body-4-font-style)]"
                          >
                            {text}
                          </p>
                        ))}
                        <time className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-body-text-color text-[length:var(--CP-btn-text-font-size)] tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                          {card.timestamp}
                        </time>
                      </div>
                    </div>

                    <Separator className="relative w-[420px] h-px" />

                    <div className="flex items-center justify-center relative w-full bg-cpbg-black rounded-[20px]">
                      {card.reactions.map((reaction, reactionIndex) => (
                        <div
                          key={reactionIndex}
                          className="flex flex-col w-[105px] items-center justify-center gap-[5px] p-[15px] relative bg-[#3b4236]"
                        >
                          <img
                            className="relative w-[30px] h-[30px] object-cover"
                            alt={`${reaction.label} icon`}
                          />
                          <div className="flex flex-col items-center justify-center relative w-full">
                            <span className="relative w-fit mt-[-1.00px] font-CP-h1 font-[number:var(--CP-h1-font-weight)] text-cpwhite text-[length:var(--CP-h1-font-size)] text-center tracking-[var(--CP-h1-letter-spacing)] leading-[var(--CP-h1-line-height)] whitespace-nowrap [font-style:var(--CP-h1-font-style)]">
                              {reaction.count}
                            </span>
                            <span className="relative w-fit font-CP-btn-text font-[number:var(--CP-btn-text-font-weight)] text-cpbody-text text-[length:var(--CP-btn-text-font-size)] text-center tracking-[var(--CP-btn-text-letter-spacing)] leading-[var(--CP-btn-text-line-height)] whitespace-nowrap [font-style:var(--CP-btn-text-font-style)]">
                              {reaction.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="flex h-[60px] items-center justify-center gap-2.5 px-[37px] py-3 relative w-full bg-[#1c1e1899] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#ffffff26] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] h-auto">
                      <span className="relative w-fit mt-[-0.50px] font-CP-body3 font-[number:var(--CP-body3-font-weight)] text-cpwhite text-[length:var(--CP-body3-font-size)] tracking-[var(--CP-body3-letter-spacing)] leading-[var(--CP-body3-line-height)] whitespace-nowrap [font-style:var(--CP-body3-font-style)]">
                        표현 보내기
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};
