import BookImage from "@/assets/images/books/book-1.png";
import HeartIcon from "@/assets/icons/heart.svg?react";

export const BookCard = () => {
  return (
    <div className="flex flex-col relative">
      <button className="w-[24px] h-[24px] absolute top-[15px] right-[15px]">
        <HeartIcon className="aspect-square w-full h-full text-white" />
      </button>

      <img
        className="w-[210px] h-[249px] aspect-[210/250] rounded-[12px] object-cover"
        src={BookImage}
        alt=""
      />

      <div className="bg-[#447DF30A] rounded-[4px] p-[6px_10px] w-fit mt-[12px]">
        <span className="text-[#447DF3] text-body-14">Детектив</span>
      </div>

      <p className="text-body-16 text-[#565656] mt-[8px]">Опасная игра бабули...</p>
      <p className="text-body-14 text-[#8C8C8C] mt-[4px]">Кристен Перрин</p>
    </div>
  );
};
