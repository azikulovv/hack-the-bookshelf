import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import { Input, Textarea } from "@/components/ui";

export const Edit = () => {
  return (
    <div className="p-[0_28px_28px_28px] mt-[4px]">
      <h1 className="text-headline-1 text-[#1A1A1A]">Редактировать сделку</h1>

      <div className="flex items-center gap-x-[12px] mt-[8px]">
        <p className="p-[8px] text-body-14 text-[#8C8C8C]">Книжные обмены</p>

        <ChevronRightIcon className="w-[4px] h-[8px] text-[#999AA3]" />

        <p className="p-[8px] rounded-[12px] text-body-14 bg-white text-[#1A1A1A]">
          Редактировать сделку
        </p>
      </div>

      <section className="mt-[32px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
        <h3 className="text-headline-5 text-[#1A1A1A]">Основная информация</h3>

        <div className="grid grid-cols-3 gap-x-[24px]">
          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Выберите книгу
            </label>

            <Input value="Опасная игра бабули. Руководство по раскрытию собственного убийства" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Дата публикации
            </label>

            <Input value="08.09.2024 год" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Рейтинг книги
            </label>

            <Input value="4.7 (320)" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-[24px]">
          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Автор книги
            </label>

            <Input value="Алим" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Жанр книги
            </label>

            <Input value="Выберите жанр книги" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              ISBN
            </label>

            <Input value="#332332" />
          </div>
        </div>

        <div className="flex flex-col gap-y-[12px] mt-[24px]">
          <label htmlFor="" className="text-body-14 text-[#565656]">
            Описание книги
          </label>

          <Textarea
            rows={6}
            maxLength={1000}
            value="Чрезвычайно забавный детектив о женщине, пытавшейся всю свою жизнь предотвратить предсказанное ей убийство. И доказала свою правоту спустя шестьдесят лет, когда ее нашли убитой в собственном загородном поместье. \n Старая добрая Англия, 1965 год. Ярмарочная гадалка предсказывает шестнадцатилетней Фрэнсис Адамс ужасающее будущее: однажды девушку убьют… С тех пор всю свою жизнь та посвящает расследованию убийства, которое еще не произошло. Никто не принимал опасения Фрэнсис всерьез, пока, шестьдесят лет спустя, ее труп не находят в библиотеке."
          />
        </div>
      </section>

      <section className="mt-[10px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
        <h3 className="text-headline-5 text-[#1A1A1A]">Состояние и визуальная информация</h3>

        <div className="grid grid-cols-3 gap-x-[24px]">
          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Состояние книги
            </label>

            <Input value="Выберите состояние книги" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Язык книги
            </label>

            <Input value="Язык книги" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Изображение книги
            </label>

            <Input value="Фото вложено" />

            <p className="text-body-12 text-[#8C8C8C]">
              Формат PNG, JPEG, JPG | Максимальный размер файла 5 МБ | 60×90
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[10px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
        <h3 className="text-headline-5 text-[#1A1A1A]">Условия обмена</h3>

        <div className="grid grid-cols-4 gap-x-[20px]">
          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Интересующий обмен
            </label>

            <Input value="Впиши интересующий обмен" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Тип сделки
            </label>

            <Input value="Выберите тип сделки" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Срок актуальности предложения
            </label>

            <Input value="Выберите дату" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Дополнительные условия обмена
            </label>

            <Input value="Выберите доп. услвоия" />
          </div>
        </div>
      </section>

      <section className="mt-[10px] bg-white border border-[#F4F5F6] rounded-[4px] p-[24px]">
        <h3 className="text-headline-5 text-[#1A1A1A]">Местоположение</h3>

        <div className="grid grid-cols-2 gap-x-[20px]">
          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Страна
            </label>

            <Input value="Выберите страну" />
          </div>

          <div className="flex flex-col gap-y-[12px] mt-[24px]">
            <label htmlFor="" className="text-body-14 text-[#565656]">
              Город
            </label>

            <Input value="Выберите город" />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-x-[24px] mt-[24px]">
        <button
          className={
            "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-white text-[#447DF3] border border-[#447DF33D]"
          }
        >
          Отмена
        </button>

        <button
          className={
            "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[#447DF3] text-white"
          }
        >
          Применить
        </button>
      </div>
    </div>
  );
};
