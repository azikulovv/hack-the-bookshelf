import cn from "classnames";
import ArrowRightIcon from "@/assets/icons/book-exchanges/arrow-right.svg?react";
import FilterIcon from "@/assets/icons/filter.svg?react";
import PlusIcon from "@/assets/icons/book-exchanges/plus.svg?react";
import { Block, BookCard, MyBookCard } from "@/components/book-exchanges";
import { useState } from "react";
import { Link } from "react-router-dom";

enum Screen {
  OffersForExchange = "OffersForExchange",
  MyAppsActive = "MyApps Active",
  MyAppsInactive = "MyApps Inactive",
}

export const BookExchanges = () => {
  const [activeScreen, setActiveScreen] = useState(Screen.OffersForExchange);
  const myOrders = false;

  const _renderOffersForExchange = () => {
    return (
      <Block
        className="mt-[32px]"
        title="Предложения для обмена"
        description="Заявки с предложениями"
        after={
          <button className="w-[56px] h-[56px] rounded-[6px] border border-[#447DF3] grid place-items-center">
            <FilterIcon className="w-[16px] h-[16px]" />
          </button>
        }
      >
        <ul className="mt-[24px] grid grid-cols-2 gap-[40px_32px]">
          <li>
            <BookCard />
          </li>
          <li>
            <BookCard />
          </li>
          <li>
            <BookCard />
          </li>
          <li>
            <BookCard />
          </li>
          <li>
            <BookCard />
          </li>
          <li>
            <BookCard />
          </li>
        </ul>

        <div className="flex items-center justify-end gap-x-[8px] mt-[24px]">
          <button
            className={cn(
              "min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border text-body-16 flex items-center justify-center gap-x-[10px]",
              !myOrders ? "border-[#447DF3] bg-[#447DF3]" : "border-[#E4E6E7]"
            )}
          >
            <span className={cn("text-body-16", !myOrders ? "text-white" : "text-[#8C8C8C]")}>
              1
            </span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">2</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">3</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">4</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">...</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">Следующая страница</span>
            <ArrowRightIcon className="w-[14px] h-[11px] text-[#8C8C8C]" />
          </button>
        </div>
      </Block>
    );
  };

  const _renderMyApps = () => {
    return (
      <Block
        className="mt-[32px]"
        title="Мои запросы"
        description="Здесь вы можете управлять своими запросами"
        after={
          <div className="flex items-center gap-x-[8px]">
            <button
              className={cn(
                "p-[12px_24px] h-[48px] rounded-[4px] text-body-14 flex items-center justify-center",
                activeScreen === Screen.MyAppsActive
                  ? "text-white bg-[#447DF3]"
                  : "text-[#686979] bg-[#F4F5F6]"
              )}
              onClick={() => setActiveScreen(Screen.MyAppsActive)}
              type="button"
            >
              Активные (4)
            </button>

            <button
              className={cn(
                "p-[12px_24px] h-[48px] rounded-[4px] text-body-14 flex items-center justify-center",
                activeScreen === Screen.MyAppsInactive
                  ? "text-white bg-[#447DF3]"
                  : "text-[#686979] bg-[#F4F5F6]"
              )}
              onClick={() => setActiveScreen(Screen.MyAppsInactive)}
              type="button"
            >
              Неактивные (4)
            </button>

            <Link
              to={"/book-exchanges/deal"}
              className="w-[48px] h-[48px] rounded-[6px] border border-[#447DF3] grid place-items-center"
            >
              <PlusIcon className="w-[16px] h-[16px]" />
            </Link>
          </div>
        }
      >
        <ul className="mt-[24px] grid grid-cols-2 gap-[40px_32px]">
          <li>
            <MyBookCard />
          </li>

          <li>
            <MyBookCard />
          </li>

          <li>
            <MyBookCard />
          </li>

          <li>
            <MyBookCard />
          </li>

          <li>
            <MyBookCard />
          </li>

          <li>
            <MyBookCard />
          </li>
        </ul>

        <div className="flex items-center justify-end gap-x-[8px] mt-[24px]">
          <button
            className={cn(
              "min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border text-body-16 flex items-center justify-center gap-x-[10px]",
              !myOrders ? "border-[#447DF3] bg-[#447DF3]" : "border-[#E4E6E7]"
            )}
          >
            <span className={cn("text-body-16", !myOrders ? "text-white" : "text-[#8C8C8C]")}>
              1
            </span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">2</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">3</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">4</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">...</span>
          </button>

          <button className="min-w-[40px] h-[40px] p-[8px_9px] rounded-[6px] border border-[#E4E6E7] flex items-center justify-center gap-x-[10px]">
            <span className="text-[#8C8C8C] text-body-16">Следующая страница</span>
            <ArrowRightIcon className="w-[14px] h-[11px] text-[#8C8C8C]" />
          </button>
        </div>
      </Block>
    );
  };

  return (
    <div className="mt-[4px] p-[0_28px_28px_28px]">
      <div className="flex justify-between">
        <h1 className="text-headline-1 text-[#1A1A1A]">Книжные обмены</h1>

        <div className="flex items-center gap-x-[2px]">
          <button
            className={cn(
              "p-[12px_24px] h-[48px] rounded-[4px] text-body-14 flex items-center justify-center",
              activeScreen === Screen.OffersForExchange
                ? "text-white bg-[#447DF3]"
                : "text-[#686979] bg-[#F4F5F6]"
            )}
            onClick={() => setActiveScreen(Screen.OffersForExchange)}
            type="button"
          >
            Предложения для обмена
          </button>

          <button
            className={cn(
              "p-[12px_24px] h-[48px] rounded-[4px] text-body-14 flex items-center justify-center",
              Screen.MyAppsActive === activeScreen || Screen.MyAppsInactive === activeScreen
                ? "text-white bg-[#447DF3]"
                : "text-[#686979] bg-[#F4F5F6]"
            )}
            onClick={() => setActiveScreen(Screen.MyAppsActive)}
            type="button"
          >
            Мои заявки
          </button>
        </div>
      </div>

      {Screen.OffersForExchange === activeScreen ? _renderOffersForExchange() : _renderMyApps()}
    </div>
  );
};
