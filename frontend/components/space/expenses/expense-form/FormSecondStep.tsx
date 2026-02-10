import {
  GeneralButton,
  SubmitButton,
} from "@/components/reusables/buttons/Buttons";
import { ExpenseFormSecondProps } from "./types/ExpenseFormSecondProps";

const SecondStep = ({
  handleFormSubmit,
  setFormState,
  errorMessage,
}: ExpenseFormSecondProps) => (
  <div className='w-full h-full flex flex-col justify-between'>
    <div></div>

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
