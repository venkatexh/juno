import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useModal } from "@/contexts/modal-context";

import MemberTile from "../../common/MemberTile";
import { MemberProps } from "../../common/types/MemberProps";
import { TextLarge } from "@/components/reusables/texts/Texts";
import { Input } from "@/components/reusables/form-elements/Inputs";
import { SubmitButton } from "@/components/reusables/buttons/Buttons";

const AddMemberForm = ({
  handleNewMemberResponse,
}: {
  handleNewMemberResponse: (members: MemberProps[]) => void;
}) => {
  const params = useParams();
  const { closeModal } = useModal();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const userBaseURL = process.env.NEXT_PUBLIC_API_USER_BASE_URL;

  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [emailSearchField, setEmailSearchField] = useState("");
  const [membersToAdd, setMembersToAdd] = useState<MemberProps[]>([]);
  const [foundUser, setFoundUser] = useState<MemberProps | null>(null);

  useEffect(() => {
    const fetchMemberByEmail = async () => {
      const response = await axios.get(
        `${userBaseURL}/user/search/email/${emailSearchField}`,
      );
      setFoundUser(response.data);
    };

    const timer = setTimeout(() => {
      if (emailSearchField) {
        fetchMemberByEmail();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [emailSearchField, userBaseURL]);

  const addMembersToSpace = async () => {
    const membersBody = {
      userIds: membersToAdd.map((m) => m.id),
      spaceId: params?.id,
    };
    console.log(membersBody);
    const res = await axios.post(
      `${baseURL}/api/spaces/members/batch`,
      {
        ...membersBody,
      },
      {
        withCredentials: true,
      },
    );
    if (res.status == 201 || res.status == 200) {
      handleNewMemberResponse(membersToAdd);
      closeModal();
    } else {
      setError("Error adding members.");
    }
  };

  const handleFoundUserClick = () => {
    if (foundUser) {
      if (membersToAdd.length == 6) {
        setWarning("You can only add up to 6 members at once.");
      } else {
        setMembersToAdd((prevMembers) => [...prevMembers, foundUser]);
        setEmailSearchField("");
        setFoundUser(null);
      }
    }
  };

  return (
    <div className='h-full flex flex-col justify-between'>
      <div>
        <TextLarge>Add a new member</TextLarge>
        <div className='py-4 relative'>
          <Input
            type='email'
            name='email'
            value={emailSearchField}
            placeholder='Search by email'
            className='mb-1'
            onChange={(e) => setEmailSearchField(e.target.value)}
          />
          {foundUser && (
            <div
              className='absolute w-full p-4 flex items-center gap-4 bg-gray-900 hover:bg-gray-800 rounded-xl 
              cursor-pointer shadow-md shadow-gray-500/50'
              onClick={handleFoundUserClick}>
              <div className='bg-amber-200 w-10 h-10 flex items-center justify-center rounded-full text-gray-500'>
                {foundUser.displayName
                  ? foundUser.displayName[0].toUpperCase()
                  : foundUser.email[0].toUpperCase()}
              </div>
              <div className='flex flex-col'>
                <div>{foundUser.displayName}</div>
                <div>{foundUser.email}</div>
              </div>
            </div>
          )}
          <div className='grid grid-cols-2 gap-x-4 my-4 auto-rows-fr items-start'>
            {membersToAdd.map((member) => (
              <MemberTile
                key={member.id}
                id={member.id}
                name={member.displayName || member.name}
                email={member.email}
                check={false}
                checked={false}
                selectMember={() => {}}
                handleUpdateSplitAmount={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-end justify-between'>
        {error && <span className='text-red-400'>{error}</span>}
        {warning && !error && <span className='text-amber-400'>{warning}</span>}
        <SubmitButton
          text='Add members'
          className='ml-auto'
          onClick={() => addMembersToSpace()}
        />
      </div>
    </div>
  );
};

export default AddMemberForm;
