import React from "react";

interface StepIconProps {
  stepNumber: number;
}

const StepIcon: React.FC<StepIconProps> = ({ stepNumber }) => {
  return (
    <div className="flex justify-center items-center w-12 h-12 border-0 rounded-full">
      <span className="text-blue-500 text-sm font-bold text-center">
        Step {stepNumber}
      </span>
    </div>
  );
};

export default StepIcon;
