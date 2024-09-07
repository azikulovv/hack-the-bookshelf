import cn from "classnames";
import { useState } from "react";
import type { ChangeEvent, FunctionComponent } from "react";

interface InputProps {
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  autocomplete?: boolean;

  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

export const Input: FunctionComponent<InputProps> = ({
  value,
  placeholder,
  autocomplete,
  defaultValue,
  onChange,
}) => {
  const [fieldValue, setFieldValue] = useState<string>(value || "");

  const autoComplete = [
    "AutoComplete 1",
    "AutoComplete 2",
    "AutoComplete 3",
    "AutoComplete 4",
    "AutoComplete 5",
  ];

  const _renderAutocomplete = () => {
    const items = autoComplete.filter((item) =>
      item.toLowerCase().includes(fieldValue.toLowerCase())
    );

    if (!autocomplete || !fieldValue || items.length === 0) return;

    return (
      <div className="absolute left-0 top-[58px] border-[#E3E3E3] border bg-[#F9FAFB] rounded-[10px] p-[12px_16px] outline-none text-[#1A1A1A] w-full flex flex-col">
        {items.map((item, key) => (
          <button
            key={key}
            className="[&:last-child]:border-b-0 border-b border-[#E3E3E3] w-full text-start text-body-14 text-[#1A1A1A]"
          >
            {item}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={cn(
          "border bg-[#F9FAFB] rounded-[10px] p-[12px_16px] outline-none text-[#1A1A1A] w-full",
          fieldValue ? "border-[#447DF3]" : "border-[#E3E3E3]"
        )}
        placeholder={placeholder}
        value={fieldValue}
        defaultValue={defaultValue}
        onChange={(e) => {
          setFieldValue(e.target.value);
          onChange?.(e);
        }}
      />

      {_renderAutocomplete()}
    </div>
  );
};
