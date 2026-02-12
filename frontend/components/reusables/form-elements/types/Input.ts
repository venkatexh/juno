import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type InputProps = {
  label?: string;
  type: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void | Dispatch<SetStateAction<string>>;
  value: string;
  name: string;
  noLabel?: boolean;
  className?: string;
  maxLength?: number;
};

export type TextAreaProps = {
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  name: string;
  noLabel?: boolean;
  className?: string;
  resizeNone?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
};
