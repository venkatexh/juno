import { LargeText, SmallText } from "@/components/reusables/texts/Texts"
import { Space } from "@/components/space/types/SpaceTypes"
import Image from "next/image"

const SpaceCard= ({name,description,imageURL}: Space) => {
  return (
    <div className='rounded-xl w-80'>
      <Image
        src={imageURL}
        width={100}
        height={100}
        alt='image'
        className='rounded-xl rounded-b-none w-full'
      />
      <div className="border border-gray-500 border-t-0 p-6 rounded-xl rounded-t-none">
        <LargeText>{name}</LargeText>
        <SmallText>{description}</SmallText>
      </div>
    </div>
  );
}

export default SpaceCard