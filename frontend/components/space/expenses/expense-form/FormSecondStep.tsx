import {
  GeneralButton,
  SubmitButton,
} from "@/components/reusables/buttons/Buttons";
import { ExpenseFormSecondProps } from "./types/ExpenseFormSecondProps";
import { TextLarge } from "@/components/reusables/texts/Texts";
import MemberTile from "../../common/MemberTile";
import { Tabs } from "@/components/reusables/tabs/Tabs";

const SecondStep = ({
  handleFormSubmit,
  setFormState,
  handleSelectMember,
  handleUnequalSplit,
  errorMessage,
  members,
  selectedMemberIds,
  splitBalance,
  splitTypeSelected,
  setSplitTypeSelected,
}: ExpenseFormSecondProps) => (
  <div className='w-full h-full flex flex-col justify-between'>
    <div>
      <TextLarge>Split among members</TextLarge>
      <Tabs
        selected={splitTypeSelected}
        tabValues={["EQUALLY", "UNEQUALLY"]}
        handleSelectTab={(tab: string) => setSplitTypeSelected(tab)}
      />
      {splitTypeSelected === "EQUALLY" && (
        <div className='grid grid-cols-2 gap-x-2'>
          {members.map((member) => (
            <MemberTile
              key={member.id}
              id={member.id}
              name={member.name}
              email={member.email}
              check={true}
              checked={selectedMemberIds.includes(member.id)}
              selectMember={(id) => handleSelectMember(id)}
              handleUpdateSplitAmount={() => {}}
            />
          ))}
        </div>
      )}
      {splitTypeSelected === "UNEQUALLY" && (
        <>
          <div className='grid grid-cols-2 gap-x-2'>
            {members.map((member) => (
              <MemberTile
                key={member.id}
                id={member.id}
                name={member.name}
                email={member.email}
                amountInput={true}
                selectMember={(id) => handleSelectMember(id)}
                handleUpdateSplitAmount={(id, e) => handleUnequalSplit(id, e)}
              />
            ))}
          </div>
          <div className='pt-2'>
            <span
              className={`${splitBalance < 0 ? "text-red-500" : ""} 
                ${splitBalance == 0 ? "text-green-500" : ""} 
                ${splitBalance > 0 ? "text-amber-500" : ""}`}>
              {splitBalance}{" "}
            </span>
            left to split
          </div>
        </>
      )}
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

export default SecondStep;
