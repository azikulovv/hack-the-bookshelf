import cn from "classnames";
import { useAuthStore } from "@/stores";
import Image from "@/assets/images/auth/signup.png";
import KarlibLogo from "@/assets/images/logotypes/karlib.png";
import EyeIcon from "@/assets/icons/input/eye.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ForwardedPhoneInput } from "@/components/auth/PhoneInput";

interface FormFields {
  email: string;
  phone: string;
  lastname: string;
  password: string;
  firstname: string;
  repeatPassword: string;
}

export const Signup = () => {
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>();

  const onSignup: SubmitHandler<FormFields> = async (formData) => {
    if (formData.password !== formData.repeatPassword) {
      return setError("repeatPassword", { type: "value", message: "passwords don't match!" });
    }

    try {
      await authStore.authenticate({
        email: formData.email,
        full_name: `${formData.lastname} ${formData.firstname}`,
        password: formData.password,
        phone_number: formData.phone
          .replace("(", "")
          .replace(")", "")
          .replace(" ", "")
          .replace("-", ""),
      });

      navigate("/liked-categories");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid grid-cols-2 p-[28px] gap-x-[10px] bg-[#46aab81c]">
      <img src={Image} alt="" className="w-full h-[calc(100vh-56px)] rounded-[4px] object-cover" />

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSignup)}
          className="max-w-[442px] w-full flex flex-col gap-y-[20px] items-center"
        >
          <img src={KarlibLogo} className="w-[100px] h-[91px]" alt="" />

          <h2 className="text-headline-3 text-[#1A1A1A] text-center">Регистрация</h2>

          <div className="grid grid-cols-2 gap-x-[20px] w-full">
            <div className="flex flex-col gap-y-[12px] w-full">
              <p className="text-[#565656] text-body-14">Фамилия</p>

              <input
                {...register("lastname", { required: true, minLength: 3, maxLength: 36 })}
                type="text"
                className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
                placeholder="Введите фамилие"
              />
            </div>

            <div className="flex flex-col gap-y-[12px] w-full">
              <p className="text-[#565656] text-body-14">Имя</p>

              <input
                {...register("firstname", { required: true, minLength: 3, maxLength: 36 })}
                type="text"
                className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
                placeholder="Введите имя"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-[12px] w-full">
            <p className="text-[#565656] text-body-14">Электронная почта</p>

            <input
              {...register("email", { required: true, minLength: 3, maxLength: 36 })}
              type="email"
              className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
              placeholder="Введите почту"
            />
          </div>

          <div className="flex flex-col gap-y-[12px] w-full">
            <p className="text-[#565656] text-body-14">Номер телефона</p>

            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <ForwardedPhoneInput {...field} />}
            />
          </div>

          <div className="flex flex-col gap-y-[12px] w-full">
            <p className="text-[#565656] text-body-14">Пароль</p>

            <div className="relative">
              <input
                {...register("password", { required: true, minLength: 3, maxLength: 36 })}
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

            <div className="relative">
              <input
                {...register("repeatPassword", { required: true, minLength: 3, maxLength: 36 })}
                type="password"
                className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
                placeholder="Введите пароль повторно"
              />

              <button
                className="w-[16px] h-[16px] absolute top-1/2 -translate-y-1/2 right-[16px]"
                type="button"
              >
                <EyeIcon className="w-[16px] h-[16px] text-[#8C8C8C]" />
              </button>
            </div>

            {errors.repeatPassword && errors.repeatPassword.type === "value" && (
              <p className="text-body-14 text-[#F24F4F]">{errors.repeatPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "p-[12px_24px] h-[42px] rounded-[10px] text-body-14 flex items-center justify-center bg-[#447DF3] text-white w-full",
              { "opacity-70": isSubmitting }
            )}
          >
            Зарегистрироваться
          </button>

          <p className="text-body-14 text-[#565656]">
            Есть аккаунт?{" "}
            <Link className="text-[#447DF3]" to="/auth/signin">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
