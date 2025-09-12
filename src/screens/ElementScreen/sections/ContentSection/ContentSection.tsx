import React from "react";
import { Button } from "../../../../components/ui/button";

export const ContentSection = (): JSX.Element => {
  return (
    <div className="w-full px-[540px] py-[86px] flex flex-col justify-center items-center gap-2.5 overflow-hidden">
      <div className="w-[837px] flex flex-col justify-start items-center gap-5">
        {/* 제목 */}
        <div className="w-[837px] text-center justify-start text-white text-5xl font-bold font-['Pretendard'] leading-[72px]">
          나의 진행 상태
        </div>
        
        {/* 진행률 바와 버튼을 포함한 컨테이너 */}
        <div className="w-[863px] h-36 relative">
          {/* 진행률 바 */}
          <div className="w-[837px] h-16 left-[26px] top-0 absolute inline-flex flex-col justify-start items-center gap-5">
            <div className="self-stretch h-16 relative bg-neutral-600 rounded-[50px] overflow-hidden">
              {/* 진행률 라인 */}
              <div className="w-[736px] h-0 left-[50px] top-[35px] absolute border-[2.5px] border-[#111410]"></div>
              
              {/* 진행률 포인트들 */}
              <div className="w-5 h-5 left-[406px] top-[24px] absolute bg-[#111410] rounded-full"></div>
              <div className="w-5 h-5 left-[39px] top-[24px] absolute bg-[#111410] rounded-full"></div>
              <div className="w-5 h-5 left-[775px] top-[24px] absolute bg-[#111410] rounded-full"></div>
              
              {/* 현재 진행 포인트 (첫 번째) */}
              <div className="w-4 h-4 left-[41px] top-[26px] absolute bg-[#ADFF00] rounded-full shadow-[inset_2px_4px_2px_0px_rgba(255,255,255,0.60)] shadow-[inset_-1px_-2px_4px_0px_rgba(0,0,0,0.50)]"></div>
            </div>
          </div>
          
          {/* 버튼 */}
          <div className="w-36 h-11 left-[2px] top-[95px] absolute">
            <div className="px-5 py-2 left-0 top-[7px] absolute bg-[#ADFF00] shadow-[inset_-3px_-5px_10px_0px_rgba(0,0,0,0.40)] shadow-[inset_2px_3px_4px_0px_rgba(173,255,0,0.20)] border border-[#666666] inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-neutral-900 text-sm font-medium font-['Pretendard'] leading-tight">
                1단계를 완수하세요!
              </div>
            </div>
            {/* 말풍선 화살표 */}
            <div className="absolute w-0 h-0 top-0 left-[68px] border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-[#ADFF00]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};