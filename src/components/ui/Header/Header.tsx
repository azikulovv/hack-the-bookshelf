import cn from "classnames";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "@/assets/images/logotypes/logo.png";
import UserImage from "@/assets/images/logotypes/logo.png";
import BellIcon from "@/assets/icons/bell.svg?react";
import ChatIcon from "@/assets/icons/chat.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";

export const Header = () => {
  const navigation = {
    home: {
      label: "Главная",
      path: "/",
    },
    bookExchanges: {
      label: "Книжные обмены",
      path: "/book-exchanges",
    },
    games: {
      label: "Игры",
      path: "/games",
    },
    forum: {
      label: "Форум",
      path: "/forum",
    },
    creativeWorks: {
      label: "Творческие работы",
      path: "/creative-works",
    },
    bookshelf: {
      label: "Книжная полка",
      path: "/bookshelf",
    },
  };

  return (
    <header className="flex items-center justify-between p-[28px]">
      <div className="flex items-center gap-x-[6px]">
        <Link to="/" className="w-[48px] h-[48px] shrink-0">
          <img src={LogoImage} alt="" className="w-full h-full aspect-square" />
        </Link>

        <nav className="flex items-center gap-x-[2px]">
          {Object.entries(navigation).map(([_, value], index) => (
            <NavLink
              to={value.path}
              key={index}
              className={({ isActive }) =>
                cn(
                  "p-[12px_24px] h-[48px] leading-[130%] text-[14px] font-medium text-center rounded-[4px] flex items-center justify-center",
                  isActive ? "text-white bg-[#447DF3]" : "text-[#686979] bg-[#F4F5F6]"
                )
              }
            >
              {value.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-x-[4px]">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            cn(
              "w-[48px] h-[48px] rounded-full grid place-items-center relative",
              isActive ? "bg-[#447DF3] text-white" : "bg-[#F4F5F6] text-[#8C8C8C]"
            )
          }
        >
          <SearchIcon className="text-[inherit] w-[16px] h-[16px]" />
        </NavLink>

        <NavLink
          to="/notification"
          className={({ isActive }) =>
            cn(
              "w-[48px] h-[48px] rounded-full grid place-items-center relative",
              isActive ? "bg-[#447DF3] text-white" : "bg-[#F4F5F6] text-[#8C8C8C]"
            )
          }
        >
          <BellIcon className="text-[inherit] w-[20px] h-[20px]" />

          <span className="absolute top-[14px] rounded-full border border-[#EDFEFF] right-[14px] w-[8px] h-[8px] bg-[#F24F4F]"></span>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            cn(
              "w-[48px] h-[48px] rounded-full grid place-items-center relative",
              isActive ? "bg-[#447DF3] text-white" : "bg-[#F4F5F6] text-[#8C8C8C]"
            )
          }
        >
          <ChatIcon className="text-[inherit] w-[20px] h-[20px]" />

          <span className="absolute top-[14px] rounded-full border border-[#EDFEFF] right-[14px] w-[8px] h-[8px] bg-[#F24F4F]"></span>
        </NavLink>

        <button className="w-[48px] h-[48px]">
          <img src={UserImage} alt="" className="w-full h-full aspect-square" />
        </button>
      </div>
    </header>
  );
};
