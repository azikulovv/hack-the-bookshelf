import type { FunctionComponent, ReactNode } from "react";

interface MyMessageProps {
  time: string;
  children: ReactNode;
}

export const MyMessage: FunctionComponent<MyMessageProps> = ({ children, time }) => {
  return (
    <div className="mt-[24px] flex flex-col gap-y-[10px] ml-auto mr-0 w-fit">
      <p className="text-body-16 text-[#1A1A1A] rounded-[18px_18px_0px_18px] bg-[#447DF31F] p-[12px_16px]">
        {children}
      </p>

      <p className="text-body-14 text-[#8C8C8C] pl-[16px]">{time}</p>
    </div>
  );
};
