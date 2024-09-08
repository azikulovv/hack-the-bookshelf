import cn from "classnames";
import { useAuthStore } from "@/stores";
import Image from "@/assets/images/auth/signin.png";
import KarlibLogo from "@/assets/images/logotypes/karlib.png";
import EyeIcon from "@/assets/icons/input/eye.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormFields {
  email: string;
  password: string;
}

export const Signin = () => {
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormFields>();

  const onSignin: SubmitHandler<FormFields> = async (formData) => {
    try {
      await authStore.authorize({
        email: formData.email,
        password: formData.password,
      });

      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid grid-cols-2 p-[28px] gap-x-[10px] bg-[#46aab81c]">
      <img src={Image} alt="" className="w-full h-[calc(100vh-56px)] rounded-[4px] object-cover" />

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSignin)}
          className="max-w-[442px] flex flex-col gap-y-[20px] items-center"
        >
          <img src={KarlibLogo} className="w-[100px] h-[91px]" alt="" />

          <div className="flex flex-col gap-y-[8px]">
            <h2 className="text-headline-3 text-[#1A1A1A] text-center">Начните прямо сейчас!</h2>

            <p className="text-body-16 text-[#565656] text-center">
              Доброе пожаловать в Карагандинскую областную универсальную научную библиотеку им. Н.В.
              Гоголя
            </p>
          </div>

          <div className="flex flex-col gap-y-[12px] w-full">
            <p className="text-[#565656] text-body-14">Электронная почта</p>

            <input
              {...register("email", { required: true })}
              type="email"
              className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
              placeholder="Введите почту"
            />
          </div>

          <div className="flex flex-col gap-y-[12px] w-full">
            <p className="text-[#565656] text-body-14">Пароль</p>

            <div className="relative">
              <input
                {...register("password", { required: true })}
                type="password"
                className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
                placeholder="Введите пароль"
              />

              <button
                className="w-[16px] h-[16px] absolute top-1/2 -translate-y-1/2 right-[16px]"
                type="button"
              >
                <EyeIcon className="w-[16px] h-[16px] text-[#8C8C8C]" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[#447DF3] text-white w-full",
              { "opacity-70": isSubmitting }
            )}
          >
            Войти
          </button>

          <p className="text-body-14 text-[#565656]">
            Нет аккаунта?{" "}
            <Link className="text-[#447DF3]" to="/auth/signup">
              Зарегистрироваться
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
