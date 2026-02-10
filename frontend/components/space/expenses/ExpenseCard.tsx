import { TextLarge, TextSmall } from "@/components/reusables/texts/Texts";
import { ExpenseProps } from "./types/ExpenseProps";

const ExpenseCard = ({ title, expenseDate, amount }: ExpenseProps) => {
  return (
    <div className='w-full h-16 p-6 flex items-center justify-between bg-gray-800 rounded-sm'>
      <div className='flex items-center gap-4'>
        <div className='w-10 h-10 flex justify-center items-center bg-pink-400 text-gray-900'>
          E
        </div>
        <div>
          <TextLarge>{title}</TextLarge>
          <TextSmall>{expenseDate}</TextSmall>
        </div>
      </div>
      <div>
        <div>
          <TextLarge>${amount.toString()}</TextLarge>
          <TextSmall>Paid by you</TextSmall>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
