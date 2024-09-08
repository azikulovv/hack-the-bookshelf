import cn from "classnames";
import { createPortal } from "react-dom";
import BookImage from "@/assets/images/books/book-1.png";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { useState } from "react";

export const Search = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isActive = false;

  return (
    <div className="p-[0_28px_28px_28px] mt-[4px]">
      {isOpen &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full">
            <div className="z-10 w-full h-full bg-[#000000a9]"></div>

            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 bg-white p-[24px] rounded-[4px]">
              <h3 className="text-center text-headline-3 text-[#1A1A1A]">Выберите жанр</h3>

              <ul className="grid grid-cols-4 gap-[12px] mt-[20px]">
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={cn(
                      "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center active:text-white active:bg-[#447DF3]",
                      isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                    )}
                  >
                    Жанр
                  </button>
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-x-[10px] mt-[24px]">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={
                    "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-white text-[#686979] border border-[#8C8C8C]"
                  }
                >
                  Отклонить
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={
                    "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[#447DF3] text-white"
                  }
                >
                  Принять
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      <h1 className="text-headline-1 text-[#1A1A1A]">Поиск</h1>

      <div className="flex items-center gap-x-[12px] mt-[8px]">
        <p className="p-[8px] text-body-14 text-[#8C8C8C]">Главная</p>

        <ChevronRightIcon className="w-[4px] h-[8px] text-[#999AA3]" />

        <p className="p-[8px] rounded-[12px] text-body-14 bg-white text-[#1A1A1A]">Поиск</p>
      </div>

      <section className="mt-[32px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
        <div className="p-[16px_20px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] flex items-center gap-x-[16px]">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-x-[10px] p-[6px_12px] bg-[#F0F1F2] rounded-[4px] [--text-color:#999AA3] hover:[--text-color:#447DF3] shrink-0"
          >
            <span className="text-body-14 text-[--text-color]">Все жанры</span>
            <ChevronRightIcon className="w-[8px] h-[12px] rotate-90 text-[--text-color]" />
          </button>

          <input
            type="text"
            className="pt-[2px] text-body-16 text-[#1a1a1a] bg-inherit outline-none w-full"
            placeholder="Поиск"
          />

          <SearchIcon className="w-[20px] h-[20px] text-[#8C8C8C] shrink-0" />
        </div>

        <div className="mt-[8px] p-[16px_20px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] grid grid-cols-4 gap-[20px]">
          <div className="flex items-center gap-x-[16px]">
            <img src={BookImage} alt="" className="w-[66px] h-[106px] rounded-[6px] object-cover" />

            <p className="text-body-14 text-[#1a1a1a]">
              Опасная игра бабули. Руководство по раскрытию собственного убийства
            </p>
          </div>

          <div className="flex items-center gap-x-[16px]">
            <img src={BookImage} alt="" className="w-[66px] h-[106px] rounded-[6px] object-cover" />

            <p className="text-body-14 text-[#1a1a1a]">
              Опасная игра бабули. Руководство по раскрытию собственного убийства
            </p>
          </div>

          <div className="flex items-center gap-x-[16px]">
            <img src={BookImage} alt="" className="w-[66px] h-[106px] rounded-[6px] object-cover" />

            <p className="text-body-14 text-[#1a1a1a]">
              Опасная игра бабули. Руководство по раскрытию собственного убийства
            </p>
          </div>

          <div className="flex items-center gap-x-[16px]">
            <img src={BookImage} alt="" className="w-[66px] h-[106px] rounded-[6px] object-cover" />

            <p className="text-body-14 text-[#1a1a1a]">
              Опасная игра бабули. Руководство по раскрытию собственного убийства
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
