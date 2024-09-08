import KarlibLogo from "@/assets/images/logotypes/karlib.png";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui";

export const LikedCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center p-[28px] bg-[#46aab81c] h-screen overflow-y-auto">
      <form className="max-w-[442px] flex flex-col gap-y-[20px] items-center">
        <img src={KarlibLogo} className="w-[100px] h-[91px]" alt="" />

        <h2 className="text-headline-3 text-[#1A1A1A] text-center">Ваши любимые жанры</h2>

        <Input
          className="w-full"
          autocomplete={["Ужасы", "Романтика"]}
          placeholder="Введите жанры"
        />

        <div className="grid grid-cols-2 gap-x-[24px] mt-[24px] w-full">
          <button
            className={
              "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[inherit] text-[#686979] border border-[#8C8C8C]"
            }
            onClick={() => navigate("/")}
          >
            Пропустить
          </button>

          <button
            className={
              "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[#447DF3] text-white"
            }
            onClick={() => navigate("/")}
          >
            Продолжить
          </button>
        </div>
      </form>
    </div>
  );
};
