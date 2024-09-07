import ChampionIcon from "@/assets/icons/champion.svg?react";
import CalendarIcon from "@/assets/icons/calendar.svg?react";
import LocationIcon from "@/assets/icons/location.svg?react";

export const DebateCard = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-[12px] p-[16px] flex flex-col gap-y-[6px]">
      <p className="text-body-16 text-[#1A1A1A]">Гарри Поттер лучше Властелина колец</p>

      <div className="flex items-center gap-x-[10px]">
        <ChampionIcon className="w-[16px] h-[16px] text-[#1A1A1A]" />

        <p className="text-body-14 text-[#8C8C8C]">Приз</p>

        <p className="text-body-14 text-[#1A1A1A]">120 000 ₸</p>
      </div>

      <div className="flex items-center gap-x-[10px]">
        <CalendarIcon className="w-[16px] h-[16px] text-[#1A1A1A]" />

        <p className="text-body-14 text-[#8C8C8C]">Дата проведения</p>

        <p className="text-body-14 text-[#1A1A1A]">14 октября 2024 года</p>
      </div>

      <div className="flex items-center gap-x-[10px]">
        <LocationIcon className="w-[16px] h-[16px] text-[#1A1A1A]" />

        <p className="text-body-14 text-[#8C8C8C]">Место проведения</p>

        <p className="text-body-14 text-[#1A1A1A]">Караганда, пр. Бухар Жырау, 32</p>
      </div>
    </div>
  );
};
