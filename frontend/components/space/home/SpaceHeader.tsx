import { TextHeading, TextMedium } from "../../reusables/texts/Texts";

const SpaceHeader = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className='w-full flex flex-col rounded-xl'>
      <TextHeading>{name}</TextHeading>
      <TextMedium>{description}</TextMedium>
    </div>
  );
};

export default SpaceHeader;
