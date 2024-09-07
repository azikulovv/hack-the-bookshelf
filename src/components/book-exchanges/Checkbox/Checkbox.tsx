import cn from "classnames";
import { useState, type FunctionComponent } from "react";

interface CheckboxProps {
  active?: boolean;
  onClick?(isActive: boolean): void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ active, onClick }) => {
  const [isActive, setIsActive] = useState<boolean>(active || false);

  const handleClick = () => {
    setIsActive((prev) => {
      onClick?.(!prev);
      return !prev;
    });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "w-[32px] h-[16px] rounded-full relative",
        isActive ? "bg-[#447DF3]" : "border border-[#8C8C8C] "
      )}
    >
      <span
        className={cn(
          "block w-[14px] h-[14px] rounded-full absolute top-1/2 -translate-y-1/2",
          isActive ? "bg-white left-[1px]" : "bg-[#8C8C8C] right-0"
        )}
      ></span>
    </button>
  );
};
