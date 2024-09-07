import cn from "classnames";
import type { FunctionComponent, ReactNode } from "react";

interface BlockProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  after?: ReactNode;
}

export const Block: FunctionComponent<BlockProps> = ({
  title,
  description,
  children,
  className,
  after,
}) => {
  return (
    <div className={cn("bg-white border-[#F4F5F6] p-[24px] rounded-[4px]", className)}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-[4px]">
          <h3 className="text-headline-5 text-[#1A1A1A]">{title}</h3>

          <p className="text-body-14 text-[#8C8C8C] mt-[4px]">{description}</p>
        </div>

        {after}
      </div>

      {children}
    </div>
  );
};
