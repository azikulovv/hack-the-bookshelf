import cn from "classnames";
import { useState } from "react";
import type { ChangeEvent, FunctionComponent } from "react";

interface TextareaProps {
  value?: string;
  placeholder?: string;
  onChange?(e: ChangeEvent<HTMLTextAreaElement>): void;
  rows?: number;
  maxLength?: number;
}

export const Textarea: FunctionComponent<TextareaProps> = ({
  rows,
  value,
  maxLength,
  placeholder,
  onChange,
}) => {
  const [fieldValue, setFieldValue] = useState<string>(value || "");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (maxLength && value.split("").length <= maxLength) {
      setFieldValue(value);
      onChange?.(e);
    }
  };

  return (
    <div className="flex flex-col gap-y-[12px]">
      <textarea
        className={cn(
          "border bg-[#F9FAFB] rounded-[10px] p-[12px_16px] outline-none text-[#1A1A1A] w-full",
          fieldValue ? "border-[#447DF3]" : "border-[#E3E3E3]"
        )}
        placeholder={placeholder}
        value={fieldValue}
        rows={rows}
        onChange={handleChange}
      />

      <p className="text-body-14 text-[#1A1A1A]">
        {fieldValue.length} / {maxLength}
      </p>
    </div>
  );
};
