export type InputProps = {
  label?: string;
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  noLabel?: boolean;
  className?: string;
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
};
