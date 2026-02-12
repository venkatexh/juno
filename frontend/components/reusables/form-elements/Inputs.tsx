import { InputProps, TextAreaProps } from "./types/Input";

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  name,
  noLabel,
  maxLength,
  className,
}: InputProps) => {
  return (
    <>
      {!noLabel && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        maxLength={maxLength}
        className={`${className} w-full h-10 border-b border-slate-800 focus:outline-none`}
      />
    </>
  );
};

const TextArea = ({
  label,
  placeholder,
  onChange,
  value,
  name,
  noLabel,
  className,
  resizeNone,
}: TextAreaProps) => {
  return (
    <>
      {!noLabel && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        className={`${className} ${resizeNone && "resize-none"} w-full h-20 border-b border-slate-800 focus:outline-none`}
      />
    </>
  );
};

export { Input, TextArea };
