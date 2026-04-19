import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useModal } from "@/contexts/modal-context";
import { MemberProps } from "../common/types/MemberProps";

import MemberTile from "../common/MemberTile";
import AddMemberForm from "./member-form/AddMemberForm";
import { AddButton } from "@/components/reusables/buttons/Buttons";
import { TextLarge, TextSmall } from "@/components/reusables/texts/Texts";

const SpaceMembers = () => {
  const params = useParams();
  const { openModal } = useModal();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [members, setMembers] = useState<MemberProps[]>([]);

  useEffect(() => {
    const getMembers = async () => {
      const response = await axios.get(
        `${baseURL}/spaces/${params?.spaceId}/members`,
      );
      setMembers(response.data);
    };

    getMembers();
  }, [params, baseURL]);

  const addNewMemberToList = (members: MemberProps[]) => {
    setMembers((prev) => [...prev, ...members]);
  };

  const handleAddMemberClick = () => {
    openModal(
      <AddMemberForm
        handleNewMemberResponse={(members: MemberProps[]) =>
          addNewMemberToList(members)
        }
      />,
      "PORTRAIT",
    );
  };

  return (
    <div className='w-1/2 flex flex-col bg-gray-900 rounded-xl px-6 py-4'>
      <div>
        <TextLarge className='pb-4'>Members</TextLarge>
        <div className='grid grid-cols-2 gap-x-2'>
          {members.slice(0, 4).map((member: MemberProps) => (
            <MemberTile
              key={member.id}
              id={member.id}
              name={member.name}
              email={member.email}
              selectMember={() => null}
              handleUpdateSplitAmount={() => null}
            />
          ))}
        </div>
        {members.length > 4 && (
          <TextSmall className='py-2 cursor-pointer'>
            + {(members.length - 4).toString()} more
          </TextSmall>
        )}
      </div>
      <div className='flex justify-end pt-4'>
        <AddButton
          text='Add'
          className=''
          onClick={() => handleAddMemberClick()}
        />
      </div>
    </div>
  );
};

export default SpaceMembers;
