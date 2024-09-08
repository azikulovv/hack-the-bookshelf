import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import { Input } from "@/components/ui/Input";

export const Deal = () => {
  return (
    <div className="p-[0_28px_28px_28px] mt-[4px]">
      <h1 className="text-headline-1 text-[#1A1A1A]">Создание сделки</h1>

      <div className="flex items-center gap-x-[12px] mt-[8px]">
        <p className="p-[8px] text-body-14 text-[#8C8C8C]">Книжные обмены</p>

        <ChevronRightIcon className="w-[4px] h-[8px] text-[#999AA3]" />

        <p className="p-[8px] rounded-[12px] text-body-14 bg-white text-[#1A1A1A]">
          Создание сделки
        </p>
      </div>

      <section className="mt-[32px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
        <h3 className="text-headline-5 text-[#1A1A1A]">Основная информация</h3>

        <div className="flex flex-col gap-y-[12px] mt-[24px]">
          <label htmlFor="" className="text-body-14 text-[#565656]">
            Выберите книгу
          </label>

          <Input
            autocomplete={[
              "Гомер «Илиада» и «Одиссея»",
              "Вирджиния Вулф «На маяк»",
              "Ральф Эллисон «Человек-невидимка»",
              "Владимир Набоков «Лолита»",
              "Уильям Фолкнер «Звук и ярость»",
            ]}
            placeholder="Выберите книгу"
          />
        </div>
      </section>
    </div>
  );
};
