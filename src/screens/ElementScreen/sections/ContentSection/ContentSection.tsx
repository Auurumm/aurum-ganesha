import React from "react";

interface ProgressStepProps {
  position: number;
  isActive?: boolean;
  isCompleted?: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ 
  position, 
  isActive = false, 
  isCompleted = false 
}) => {
  const getStepColor = () => {
    if (isActive) return "bg-lime-400";
    if (isCompleted) return "bg-lime-400";
    return "bg-neutral-900";
  };

  const getStepSize = () => {
    return isActive ? "w-4 h-4" : "w-5 h-5";
  };

  const getStepShadow = () => {
    return isActive ? "shadow-[inset_2px_4px_2px_0px_rgba(255,255,255,0.60)] shadow-[inset_-1px_-2px_4px_0px_rgba(0,0,0,0.50)]" : "";
  };

  const getTopPosition = () => {
    return isActive ? "26px" : "24px";
  };

  return (
    <div 
      className={`${getStepSize()} absolute ${getStepColor()} rounded-full ${getStepShadow()}`}
      style={{ left: `${position}px`, top: getTopPosition() }}
    />
  );
};

export interface ContentSectionProps {
  currentStep?: number;
  totalSteps?: number;
  title?: string;
  tooltipMessage?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  currentStep = 1,
  totalSteps = 3,
  title = "나의 진행 상태",
  tooltipMessage = "1단계를 완수하세요!"
}) => {
  // Fixed step positions matching the provided structure
  const stepPositions = [39, 406, 775];

  return (
    // 바깥 사각형
    <div className="w-full py-20 flex flex-col justify-center items-center gap-2.5 overflow-hidden">
      {/* 안쪽 사각형 */}
      <div className="w-[837px] flex flex-col justify-start items-center gap-5">
        
        {/* 나의 진행 상태 */}
        <div className="w-[837px] text-center justify-start text-white text-5xl font-bold font-['Pretendard'] leading-[72px]">
          {title}
        </div>
        
        {/* 상태 바 */}
        <div data-property-1="Component 1" className="w-[863px] h-36 relative">
          {/* Progress bar container */}
          <div className="w-[837px] h-16 left-[26px] top-0 absolute inline-flex flex-col justify-start items-center gap-5">
            <div className="self-stretch h-16 relative bg-neutral-600 rounded-[50px] overflow-hidden">
              {/* Progress line */}
              <div className="w-[736px] h-0 left-[50px] top-[35px] absolute outline outline-[5px] outline-offset-[-2.50px] outline-neutral-900"></div>
              
              {/* Progress filled line (shows completion) */}
              {currentStep > 1 && (
                <div 
                  className="h-0 left-[50px] top-[35px] absolute outline outline-[5px] outline-offset-[-2.50px] outline-lime-400"
                  style={{ 
                    width: `${(736 * (currentStep - 1)) / (totalSteps - 1)}px` 
                  }}
                />
              )}
              
              {/* Progress steps */}
              {stepPositions.slice(0, totalSteps).map((position, index) => (
                <ProgressStep
                  key={index}
                  position={position}
                  isActive={index + 1 === currentStep}
                  isCompleted={index + 1 < currentStep}
                />
              ))}
            </div>
          </div>
          
          {/* Tooltip */}
          {currentStep <= totalSteps && (
            <div data-property-1="Default" className="w-36 h-11 left-[2px] top-[95px] absolute">
              <div className="px-5 py-2 left-0 top-[7px] absolute bg-[#ADFF00] shadow-[inset_-3px_-5px_10px_0px_rgba(0,0,0,0.40)] shadow-[inset_2px_3px_4px_0px_rgba(173,255,0,0.20)] outline outline-1 outline-offset-[-0.50px] outline-stone-500 inline-flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-neutral-900 text-sm font-medium font-['Pretendard'] leading-tight">
                  {tooltipMessage}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};