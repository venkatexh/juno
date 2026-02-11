import { TextLarge } from "@/components/reusables/texts/Texts";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MemberProps } from "../common/types/MemberProps";
import MemberTile from "../common/MemberTile";

const SpaceMembers = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const params = useParams();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      const response = await axios.get(
        `${baseURL}/spaces/${params?.id}/members`,
      );
      setMembers(response.data);
    };

    getMembers();
  }, [params, baseURL]);

  return (
    <div className='w-1/2 border border-gray-500 rounded-xl p-6'>
      <TextLarge>Members</TextLarge>
      <div className='grid grid-cols-2 gap-4'>
        {members.map((member: MemberProps) => (
          <MemberTile
            key={member.id}
            id={member.id}
            name={member.name}
            email={member.email}
            selectMember={() => null}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceMembers;
