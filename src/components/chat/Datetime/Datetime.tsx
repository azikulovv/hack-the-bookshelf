import type { FunctionComponent, ReactNode } from "react";

interface DatetimeProps {
  children: ReactNode;
}

export const Datetime: FunctionComponent<DatetimeProps> = ({ children }) => {
  return (
    <div className="mt-[24px] p-[6px_10px] rounded-[6px] bg-[#F4F5F6] text-body-12 text-[#565656] w-fit mx-auto">
      {children}
    </div>
  );
};
