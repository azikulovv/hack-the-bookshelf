import { Link } from "react-router-dom";
import BookImage from "@/assets/images/books/book-1.png";
import DeleteIcon from "@/assets/icons/book-exchanges/delete.svg?react";
import PencilIcon from "@/assets/icons/book-exchanges/pencil.svg?react";
import { Checkbox } from "@/components/book-exchanges";

export const MyBookCard = () => {
  return (
    <div className="flex gap-x-[16px]">
      <img
        className="w-[156px] h-[233px] aspect-[156/233] rounded-[12px] object-cover"
        src={BookImage}
        alt=""
      />

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-x-[8px]">
            <li>
              <div className="bg-[#447DF30A] rounded-[4px] p-[6px_10px] w-fit">
                <span className="text-[#447DF3] text-body-14">Детектив</span>
              </div>
            </li>

            <li>
              <div className="bg-[#447DF30A] rounded-[4px] p-[6px_10px] w-fit">
                <span className="text-[#447DF3] text-body-14">Расследования убийств</span>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-x-[2px]">
            <button
              className="w-[30px] h-[30px] grid place-items-center bg-[rgba(242,79,79,0.04)] rounded-[4px]"
              type="button"
            >
              <DeleteIcon className="text-[#F24F4F] w-[16px] h-[16px]" />
            </button>

            <button
              className="w-[30px] h-[30px] grid place-items-center bg-[rgba(26,26,26,0.02)] rounded-[4px]"
              type="button"
            >
              <PencilIcon className="text-[#1A1A1A] w-[16px] h-[16px]" />
            </button>
          </div>
        </div>

        <p className="text-body-16 text-[#565656] mt-[12px]">
          Опасная игра бабули. Руководство по раскрытию собственного убийства
        </p>
        <p className="text-body-14 text-[#8C8C8C] mt-[6px]">Кристен Перрин</p>

        <p className="text-body-14 text-[#8C8C8C] mt-[12px]">
          Чрезвычайно забавный детектив о женщине, пытавшейся всю свою жизнь предотвратить
          предсказанное ей убийство. И доказала свою правоту спустя шестьдесят лет, когда{" "}
          <Link to={"#"} className="text-[#447DF3]">
            Далее
          </Link>
        </p>

        <div className="flex items-center gap-x-[12px] mt-[12px]">
          <p className="text-[#447DF3] text-body-12">Активный</p>
          <Checkbox />
          <p className="text-[#565656] text-body-12">Неактивный</p>
        </div>

        <button
          className={
            "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-white text-[#447DF3] w-fit mt-[12px] border border-[#447DF33D]"
          }
          type="button"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};
