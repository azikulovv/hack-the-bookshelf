import UserImage from "@/assets/images/user/user.png";
import type { FunctionComponent, ReactNode } from "react";

interface TalkerMessageProps {
  time: string;
  fullname: string;
  children: ReactNode;
}

export const TalkerMessage: FunctionComponent<TalkerMessageProps> = ({
  time,
  children,
  fullname,
}) => {
  return (
    <div className="mt-[24px] flex flex-col gap-y-[10px]">
      <div className="flex items-end gap-x-[6px]">
        <img src={UserImage} alt="" className="w-[32px] h-[32px] rounded-full object-cover" />

        <p className="text-body-16 text-[#1A1A1A] rounded-[18px_18px_18px_0px] bg-[#F4F5F6] p-[12px_16px]">
          {children}
        </p>
      </div>

      <div className="flex items-center gap-x-[8px] pl-[54px]">
        <p className="text-body-14 text-[#565656]">{fullname}</p>
        <p className="text-body-14 text-[#8C8C8C]">{time}</p>
      </div>
    </div>
  );
};
