import {
  GeneralButton,
  SubmitButton,
} from "@/components/reusables/buttons/Buttons";
import { ExpenseFormSecondProps } from "./types/ExpenseFormSecondProps";
import { TextLarge } from "@/components/reusables/texts/Texts";
import MemberTile from "../../common/MemberTile";

const SecondStep = ({
  handleFormSubmit,
  setFormState,
  handleSelectMember,
  errorMessage,
  members,
  selectedMemberIds
}: ExpenseFormSecondProps) => {

  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <div>
        <TextLarge>Split among members</TextLarge>
        <div className='grid grid-cols-2 gap-4 pt-2'>
          {members.map((member) => (
            <MemberTile
              key={member.id}
              id={member.id}
              name={member.name}
              email={member.email}
              check={true}
              checked={selectedMemberIds.includes(member.id)}
              selectMember={(id) => handleSelectMember(id)}
            />
          ))}
        </div>
      </div>
      <div className=''>
        {errorMessage != "" && (
          <div className='text-red-700 text-lg'>{errorMessage}</div>
        )}
        <div className='text-right'>
          <GeneralButton
            text='Previous'
            onClick={() => {
              setFormState("FIRST");
            }}
          />
          <SubmitButton
            text='Create'
            className='ml-4'
            onClick={() => handleFormSubmit()}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
