import { Text } from "@/components/reusables/texts/types/Text";

const TextSmall = ({ children, className, onClick }: Text) => {
  return (
    <p className={`${className} text-sm text-gray-400`} onClick={onClick}>
      {children}
    </p>
  );
};

const TextMedium = ({ children, className, onClick }: Text) => {
  return (
    <p className={`${className} text-base text-gray-400`} onClick={onClick}>
      {children}
    </p>
  );
};

const TextLarge = ({ children, className, onClick }: Text) => {
  return (
    <p className={`${className} text-lg text-gray-400`} onClick={onClick}>
      {children}
    </p>
  );
};

const TextHeading = ({ children, className, onClick }: Text) => {
  return (
    <p className={`${className} text-3xl text-gray-400`} onClick={onClick}>
      {children}
    </p>
  );
};

export { TextSmall, TextMedium, TextLarge, TextHeading };
