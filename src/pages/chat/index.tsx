import SearchIcon from "@/assets/icons/search.svg?react";
import { TalkerMessage, Datetime, MyMessage, MessageField } from "@/components/chat";

export const Chat = () => {
  return (
    <section className="bg-white border border-[#F4F5F6] rounded-[4px] flex flex-col">
      <div className="border-b border-[#F4F5F6] p-[24px] flex items-center justify-between">
        <h2 className="text-headline-5">Чат с Алимом</h2>

        <div className="flex items-center gap-x-[10px]">
          <div className="flex items-center gap-x-[16px] p-[12px_20px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB]">
            <input
              type="text"
              placeholder="Поиск по сообщениям"
              className="text-body-16 text-[#1a1a1a] outline-none bg-inherit"
            />

            <SearchIcon className="w-[20px] h-[20px] text-[#8C8C8C]" />
          </div>

          <button
            type="button"
            className="h-[45px] p-[10px_32px] rounded-[10px] border border-[#447DF33D] text-body-14 text-[#447DF3]"
          >
            Предложить
          </button>
        </div>
      </div>

      <div className="max-h-[446px] h-full px-[24px] overflow-y-auto">
        <Datetime>Суббота, 7 сентября</Datetime>

        <TalkerMessage time="18:00" fullname="Алим Джолдаспаев">
          Йоу Алим, как ты?
        </TalkerMessage>

        <MyMessage time="18:00">Порядок брат, сам как?</MyMessage>

        <TalkerMessage time="18:00" fullname="Алим Джолдаспаев">
          Живой, пятнадцатую грушу разьебал
        </TalkerMessage>

        <MyMessage time="18:00">Вот это я понимаю машина 300кг, Сарычев</MyMessage>

        <Datetime>Суббота, 7 сентября</Datetime>

        <TalkerMessage time="18:00" fullname="Алим Джолдаспаев">
          Йоу Алим, как ты?
        </TalkerMessage>

        <MyMessage time="18:00">Порядок брат, сам как?</MyMessage>

        <TalkerMessage time="18:00" fullname="Алим Джолдаспаев">
          Живой, пятнадцатую грушу разьебал
        </TalkerMessage>

        <MyMessage time="18:00">Вот это я понимаю машина 300кг, Сарычев</MyMessage>
      </div>

      <div className="p-[24px] mt-auto mb-0 bg-white">
        <MessageField />
      </div>
    </section>
  );
};
