import  { ChangeEvent, useState } from "react";

interface IInputProps {
  label: string
}

const Input = (props: IInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      {props.label}
      <input
        className="border border-black rounded-xl"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
};

export default Input;
