import Image from "next/image";
import { TextLarge, TextMedium, TextSmall } from "../reusables/texts/Texts";
import { TemplateCardProps } from "./types/TemplateCardProps";

const TemplateCard = ({
  id,
  name,
  description,
  subscriptionType,
  imageURL,
  selected,
  handleSetSelectedTemplate,
}: TemplateCardProps) => {
  return (
    <div
      className={`${selected ? "border border-gray-500" : ""} py-2 flex flex-col bg-gray-800 rounded-xl 
      cursor-pointer`}
      onClick={() => handleSetSelectedTemplate(id)}>
      <div className='px-2 pb-2 flex items-center justify-between'>
        <TextLarge className=''>{name}</TextLarge>
        <TextSmall className='px-3 bg-blue-500  rounded-xl text-white'>
          {subscriptionType[0] + subscriptionType.slice(1).toLowerCase()}
        </TextSmall>
      </div>
      <Image
        src={imageURL}
        width={1000}
        height={1000}
        alt='image'
        className='w-full h-32'
      />
      <TextMedium className='pt-2 px-2 line-clamp-2'>{description}</TextMedium>
    </div>
  );
};

export default TemplateCard;
