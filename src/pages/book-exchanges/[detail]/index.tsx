import BookImage from "@/assets/images/books/book-1.png";
import UserImage from "@/assets/images/user/user.png";
import StarIcon from "@/assets/icons/book-exchanges/star.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";

export const AboutTheBook = () => {
  return (
    <div className="p-[0_28px_28px_28px] mt-[4px]">
      <div className="flex items-center gap-x-[12px]">
        <p className="p-[8px] text-body-14 text-[#8C8C8C]">Книжные обмены</p>

        <ChevronRightIcon className="w-[4px] h-[8px] text-[#999AA3]" />

        <p className="p-[8px] rounded-[12px] text-body-14 bg-white text-[#1A1A1A]">
          Опасная игра бабули. Руководство по раскрытию собственного убийства
        </p>
      </div>

      <section className="mt-[32px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px] gap-[24px] grid grid-cols-[291px_1fr_387px]">
        <div className="w-full h-full">
          <img
            className="w-[291px] h-[468px] aspect-[291/468] object-cover rounded-[24px]"
            src={BookImage}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-y-[16px]">
          <ul className="flex items-center gap-x-[8px]">
            <li>
              <div className="bg-[#1A1A1A0A] rounded-[4px] p-[6px_10px] w-fit">
                <span className="text-[#1A1A1A] text-body-14">#332332</span>
              </div>
            </li>

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

          <h2 className="text-headline-3 text-[#1A1A1A]">
            Опасная игра бабули. Руководство по раскрытию собственного убийства
          </h2>

          <div className="flex items-center gap-x-[10px]">
            <span className="text-body-14 text-[#565656]">Автор</span>
            <span className="text-body-14 text-[#447DF3]">Кристен Перрин</span>
          </div>

          <div className="flex items-center gap-x-[10px]">
            <span className="text-body-14 text-[#565656]">Рейтинг книги</span>
            <span className="text-body-14 text-[#1A1A1A] flex items-center gap-x-[6px]">
              <StarIcon className="w-[16px] h-[16px] mb-[3px]" />
              4.7 (320)
            </span>
          </div>

          <div className="flex items-center gap-x-[10px]">
            <span className="text-body-14 text-[#565656]">Входит в серию</span>
            <span className="text-body-14 text-[#447DF3]">
              «Tok. Убийства и кексики. Душевные истории про убийства»
            </span>
          </div>

          <div className="flex items-center gap-x-[10px]">
            <span className="text-body-14 text-[#565656]">Срок актуальности предложения</span>
            <span className="text-body-14 text-[#1A1A1A]">08.09.2024 год</span>
          </div>

          <div className="flex items-center gap-x-[10px]">
            <span className="text-body-14 text-[#565656]">Местоположение</span>
            <span className="text-body-14 text-[#1A1A1A]">Казахстан, Караганда</span>
          </div>

          <div className="bg-[#F5F7F9] p-[16px] rounded-[12px] flex flex-col gap-y-[8px]">
            <p className="text-body-14 text-[#1A1A1A]">О книге</p>

            <p className="text-body-14 text-[#565656]">
              Чрезвычайно забавный детектив о женщине, пытавшейся всю свою жизнь предотвратить
              предсказанное ей убийство. И доказала свою правоту спустя шестьдесят лет, когда ее
              нашли убитой в собственном загородном поместье.
            </p>

            <p className="text-body-14 text-[#565656]">
              Старая добрая Англия, 1965 год. Ярмарочная гадалка предсказывает шестнадцатилетней
              Фрэнсис Адамс ужасающее будущее: однажды девушку убьют…
            </p>
          </div>

          <div className="flex flex-col gap-y-[12px]">
            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Язык книги</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">Русская</p>
            </div>

            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Дата публикации</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">08.09.2024 год</p>
            </div>

            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Кол-во страниц</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">312 страниц</p>
            </div>

            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Состояние книги</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">Идеальна</p>
            </div>

            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Интересующий обмен</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">Кукла</p>
            </div>

            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Тип сделки</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">Подарок</p>
            </div>

            <div className="flex items-end justify-between gap-x-[4px] whitespace-nowrap">
              <p className="text-body text-[#1A1A1A]">Дополнительные условия обмена</p>
              <p className="border-b-2 [border-style:dotted] w-full mb-[6px]"></p>
              <p className="text-body text-[#565656]">Локальный обмен</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="bg-[#F9FAFB] flex flex-col gap-[16px] p-[16px] rounded-[12px]">
            <div className="flex items-center gap-x-[12px]">
              <img className="w-[48px] h-[48px] rounded-[10px]" src={UserImage} alt="" />

              <div className="flex flex-col gap-y-[2px]">
                <p className="text-body-16 text-[#43444B]">Джолдаспаев Алимжан</p>
                <p className="text-body-14 text-[#43444B]">Владелец книги</p>
              </div>
            </div>

            <div className="flex items-center gap-x-[16px]">
              <div className="flex flex-col gap-y-[2px]">
                <div className="flex items-center gap-x-[6px]">
                  <StarIcon className="w-[16px] h-[16px] mb-[4px]" />

                  <span className="text-body-16 text-[#1A1A1A] ">5.0</span>
                </div>

                <p className="text-body-14 text-[#565656]">156 оценок</p>
              </div>

              <div className="h-[32px] w-[1px] rounded-full bg-[#447DF3]"></div>

              <div className="flex flex-col gap-y-[2px]">
                <p className="text-body-16 text-[#1A1A1A]">6</p>
                <p className="text-body-14 text-[#447DF3]">отзывов</p>
              </div>
            </div>
          </div>

          <button
            className={
              "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-white text-[#447DF3] w-full mt-[12px] border border-[#447DF33D]"
            }
            type="button"
          >
            Связаться с владельцем
          </button>
        </div>
      </section>
    </div>
  );
};
