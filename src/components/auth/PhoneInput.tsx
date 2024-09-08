import { forwardRef } from "react";
import { PatternFormat } from "react-number-format";

// eslint-disable-next-line react/display-name
export const ForwardedPhoneInput = forwardRef((props, ref) => (
  <PatternFormat
    {...props}
    getInputRef={ref}
    className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
    format="+7 (###) ###-##-##"
    allowEmptyFormatting
    placeholder="Введите номер телефона"
  />
));

export const PhoneInput = () => (
  <PatternFormat
    className="text-body-14 text-[#1a1a1a] p-[12px_16px] rounded-[10px] border border-[#E3E3E3] bg-[#F9FAFB] w-full outline-none focus:border-[#447DF3]"
    format="+7 (###) ###-##-##"
    allowEmptyFormatting
    placeholder="Введите номер телефона"
  />
);
