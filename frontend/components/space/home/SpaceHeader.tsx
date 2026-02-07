import { TextHeading, TextMedium } from "../../reusables/texts/Texts";

const SpaceHeader = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className='w-full flex flex-col border border-gray-500 rounded-xl py-6 px-12'>
      <TextHeading>{name}</TextHeading>
      <TextMedium>{description}</TextMedium>
    </div>
  );
};

export default SpaceHeader;
