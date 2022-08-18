import {DetailedHTMLProps, InputHTMLAttributes, PropsWithoutRef} from "react";

export function Input({
  id,
  labelText,
  ...rest
}: {id: string; labelText: string} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "className" | "style" | "id" | "name"
>) {
  return (
    <>
      <label className={"text-[#ffb3da99]"} htmlFor={id}>
        {labelText}
      </label>
      <div>
        <input
          className={"w-full h-8 bg-cover"}
          style={{backgroundImage: "url(/input.png)"}}
          id={id}
          name={id}
          {...rest}
        />
      </div>
    </>
  );
}
