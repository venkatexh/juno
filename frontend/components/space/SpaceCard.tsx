import { TextSmall, TextLarge } from "@/components/reusables/texts/Texts";
import { Space } from "@/components/space/types/SpaceTypes";
import Image from "next/image";
import Link from "next/link";

const SpaceCard = ({ id, name, description, imageURL }: Space) => {
  return (
    <Link key={id} href={`/space/${id}`}>
      <div className='rounded-xl w-80'>
        <Image
          src={imageURL}
          width={100}
          height={100}
          alt='image'
          className='rounded-xl rounded-b-none w-full'
        />
        <div className='border border-gray-500 border-t-0 p-6 rounded-xl rounded-t-none'>
          <TextLarge>{name}</TextLarge>
          <TextSmall>{description}</TextSmall>
        </div>
      </div>
    </Link>
  );
};

export default SpaceCard;
