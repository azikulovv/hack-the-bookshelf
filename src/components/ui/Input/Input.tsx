import { useState } from "react";
import cn from "classnames";
import type { ChangeEvent, FunctionComponent } from "react";

interface InputProps {
  value?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  autocomplete?: string[];
  onClickAutocomplete?(value: string): void;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

export const Input: FunctionComponent<InputProps> = ({
  value = "",
  placeholder,
  autocomplete = [],
  defaultValue,
  className,
  onChange,
  onClickAutocomplete,
}) => {
  const [fieldValue, setFieldValue] = useState<string>(value);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isSelected) setIsSelected(false);
    setFieldValue(e.target.value);
    onChange?.(e);
  };

  const handleAutocompleteClick = (item: string) => {
    setFieldValue(item);
    setIsSelected(true);
    onClickAutocomplete?.(item);
  };

  const renderAutocomplete = () => {
    if (!autocomplete.length || isSelected || !fieldValue) return null;

    const filteredItems = autocomplete.filter((item) =>
      item.toLowerCase().includes(fieldValue.toLowerCase())
    );

    if (filteredItems.length === 0) return null;

    return (
      <div className="absolute left-0 top-[58px] border border-[#E3E3E3] bg-[#F9FAFB] rounded-[10px] outline-none text-[#1A1A1A] w-full flex flex-col">
        {filteredItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleAutocompleteClick(item)}
            className="w-full text-start text-body-14 text-[#565656] py-[12px] mx-[16px] border-b border-[#E3E3E3] last:border-b-0"
          >
            {item}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("relative", className)}>
      <input
        type="text"
        className={cn(
          "border bg-[#F9FAFB] rounded-[10px] p-[12px_16px] outline-none text-[#1A1A1A] w-full",
          fieldValue ? "border-[#447DF3]" : "border-[#E3E3E3]"
        )}
        placeholder={placeholder}
        value={fieldValue}
        defaultValue={defaultValue}
        onChange={handleInputChange}
      />
      {renderAutocomplete()}
    </div>
  );
};
