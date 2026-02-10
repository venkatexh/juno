import { DatePicker } from "react-datepicker";
import { GeneralButton } from "@/components/reusables/buttons/Buttons";
import { Input } from "@/components/reusables/form-elements/Inputs";
import { TextLarge } from "@/components/reusables/texts/Texts";
import { ExpenseFormFirstProps } from "./types/ExpenseFormFirstProps";
import CustomDateInput from "./CustomDateInput";

const FirstStep = ({
  title,
  date,
  amount,
  handleFormChange,
  setFormState,
  setDate,
}: ExpenseFormFirstProps) => (
  <div className='w-full h-full flex flex-col justify-between'>
    <div>
      <TextLarge>New expense</TextLarge>
      <form className='py-4 flex gap-12'>
        <div className='w-1/2'>
          <Input
            type='text'
            name='title'
            value={title}
            placeholder='Add a description'
            className='mb-4'
            onChange={handleFormChange}
          />
          <Input
            type='number'
            name='amount'
            value={amount?.toString() || ""}
            placeholder='0.00'
            className='mb-4'
            onChange={handleFormChange}
          />
        </div>
        <div className='w-1/2 text-center'>
          <DatePicker
            selected={date}
            onChange={setDate}
            customInput={
              <CustomDateInput className='bg-blue-600 px-4 py-2 rounded mt-2' />
            }
          />
        </div>
      </form>
    </div>

    <div className='text-right'>
      <GeneralButton text='Next' onClick={() => setFormState("SECOND")} />
    </div>
  </div>
);

export default FirstStep;
