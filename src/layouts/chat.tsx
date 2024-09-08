import cn from "classnames";
import ChatIcon from "@/assets/icons/chat/chat.svg?react";
import DealIcon from "@/assets/icons/chat/deal.svg?react";
import DebateIcon from "@/assets/icons/chat/debate.svg?react";
import ForumIcon from "@/assets/icons/chat/forum.svg?react";
import SupportIcon from "@/assets/icons/chat/support.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import UserImage from "@/assets/images/user/user.png";

import type { FunctionComponent, ReactNode } from "react";

export const ChatLayout: FunctionComponent<Readonly<{ children: ReactNode }>> = ({ children }) => {
  return (
    <div className="p-[0_28px_28px_28px] mt-[4px]">
      <div className="flex items-center gap-x-[12px] mt-[8px]">
        <p className="p-[8px] text-body-14 text-[#8C8C8C]">Главная</p>

        <ChevronRightIcon className="w-[4px] h-[8px] text-[#999AA3]" />

        <p className="p-[8px] rounded-[12px] text-body-14 bg-white text-[#1A1A1A]">Чат</p>
      </div>

      <div className="mt-[32px] grid grid-cols-[0.3fr_1fr] gap-x-[10px]">
        <div className="flex flex-col gap-y-[10px]">
          <section className="bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
            <button
              type="button"
              className={
                "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[#447DF3] text-white w-full"
              }
            >
              Новый чат
            </button>

            <ul className="mt-[20px] flex flex-col gap-y-[10px]">
              <li>
                <button
                  className={cn(
                    "flex items-center gap-x-[8px] p-[8px_10px] w-full rounded-[6px]",
                    "[--text-color:#1a1a1a] bg-[#F4F5F6]"
                  )}
                >
                  <ChatIcon className="text-[--text-color] w-[16px] h-[16px]" />
                  <span className="text-body-14 text-[--text-color]">Чат (23)</span>
                </button>
              </li>

              <li>
                <button
                  className={cn(
                    "flex items-center gap-x-[8px] p-[8px_10px] w-full rounded-[6px]",
                    "[--text-color:#565656]"
                  )}
                >
                  <DealIcon className="text-[--text-color] w-[16px] h-[16px]" />
                  <span className="text-body-14 text-[--text-color]">Активные сделки (5)</span>
                </button>
              </li>

              <li>
                <button
                  className={cn(
                    "flex items-center gap-x-[8px] p-[8px_10px] w-full rounded-[6px]",
                    "[--text-color:#565656]"
                  )}
                >
                  <DebateIcon className="text-[--text-color] w-[16px] h-[16px]" />
                  <span className="text-body-14 text-[--text-color]">Дебаты (32)</span>
                </button>
              </li>

              <li>
                <button
                  className={cn(
                    "flex items-center gap-x-[8px] p-[8px_10px] w-full rounded-[6px]",
                    "[--text-color:#565656]"
                  )}
                >
                  <ForumIcon className="text-[--text-color] w-[16px] h-[16px]" />
                  <span className="text-body-14 text-[--text-color]">Форум (52)</span>
                </button>
              </li>

              <li>
                <button
                  className={cn(
                    "flex items-center gap-x-[8px] p-[8px_10px] w-full rounded-[6px]",
                    "[--text-color:#565656]"
                  )}
                >
                  <SupportIcon className="text-[--text-color] w-[16px] h-[16px]" />
                  <span className="text-body-14 text-[--text-color]">Поддержка</span>
                </button>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
            <ul className="flex flex-col gap-y-[10px]">
              {Array(5)
                .fill("")
                .map((_, key) => (
                  <li key={key}>
                    <button
                      className={cn(
                        "flex items-center gap-x-[8px] p-[8px_10px] w-full rounded-[4px]",
                        key === 0 && "bg-[#F4F5F6]"
                      )}
                    >
                      <img src={UserImage} alt="" className="w-[32px] h-[32px] rounded-full" />
                      <span className="text-body-14 text-[#565656]">Алим Джолдаспаев</span>
                    </button>
                  </li>
                ))}
            </ul>
          </section>
        </div>

        {children}
      </div>
    </div>
  );
};
