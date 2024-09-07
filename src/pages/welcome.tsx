import { Block, BookCard, ForumCard, CreativeWorkCard, DebateCard } from "@/components/welcome";

export const Welcome = () => {
  return (
    <div className="mt-[4px] p-[0_28px_28px_28px]">
      <h1 className="text-headline-1 text-[#1A1A1A]">Привет, Алим Джолдаспаев ✌️</h1>
      <p className="mt-[4px] text-body-16 text-[#565656]">Воскресенье, 8 сентября 2024 года</p>

      <div className="grid grid-cols-[1fr_0.5fr] gap-x-[10px] mt-[40px]">
        <Block title="Предложенные книги" description="Книги, подбирающие под ваши жанры">
          <ul className="flex items-center gap-x-[24px] mt-[24px]">
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
        </Block>

        <Block title="Форум" description="Обсуждение интересующих тем">
          <ul className="flex flex-col gap-y-[12px] mt-[24px]">
            <li>
              <ForumCard />
            </li>
            <li>
              <ForumCard />
            </li>
            <li>
              <ForumCard />
            </li>
          </ul>
        </Block>
      </div>

      <Block
        className="mt-[10px]"
        title="Активные дебаты"
        description="Дебаты, которые сейчас активны"
      >
        <ul className="grid grid-cols-3 items-center gap-x-[24px] mt-[24px]">
          <li>
            <DebateCard />
          </li>
          <li>
            <DebateCard />
          </li>
          <li>
            <DebateCard />
          </li>
        </ul>
      </Block>

      <Block
        className="mt-[10px]"
        title="Творческие работы"
        description="Последняя творческая работа"
      >
        <ul className="flex items-center gap-x-[24px] mt-[24px]">
          <li>
            <CreativeWorkCard />
          </li>
          <li>
            <CreativeWorkCard />
          </li>
          <li>
            <CreativeWorkCard />
          </li>
          <li>
            <CreativeWorkCard />
          </li>
        </ul>
      </Block>
    </div>
  );
};
