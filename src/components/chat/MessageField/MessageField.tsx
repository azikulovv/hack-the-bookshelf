import PlusIcon from "@/assets/icons/chat/plus.svg?react";

export const MessageField = () => {
  return (
    <form className="p-[16px_16px_16px_24px] rounded-[12px] border border-[#F4F5F6] bg-[#F9FAFB] flex items-center gap-x-[12px]">
      <input
        type="text"
        placeholder="Написать Алиму"
        className="text-body-14 text-[#1a1a1a] w-full bg-inherit outline-none"
      />

      <button
        type="button"
        className="grid place-items-center border-[#447DF31F] border bg-white w-[36px] h-[36px] rounded-full shrink-0"
      >
        <PlusIcon className="w-[20px] h-[20px] text-[#447DF3]" />
      </button>

      <button
        type="button"
        className="text-body-12 p-[10px_32px] text-white rounded-[10px] bg-[#447DF3] shrink-0"
      >
        Отправить
      </button>
    </form>
  );
};
