import { Text } from "@/components/reusables/texts/types/Text";

const TextSmall = ({ children, className }: Text) => {
  return <p className={`${className} text-sm text-gray-400`}>{children}</p>;
};

const TextMedium = ({ children, className }: Text) => {
  return <p className={`${className} text-base text-gray-400`}>{children}</p>;
};

const TextLarge = ({ children, className }: Text) => {
  return <p className={`${className} text-lg text-gray-400`}>{children}</p>;
};

const TextHeading = ({ children, className }: Text) => {
  return <p className={`${className} text-3xl text-gray-400`}>{children}</p>;
};

export { TextSmall, TextMedium, TextLarge, TextHeading };
