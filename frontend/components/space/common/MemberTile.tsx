import { TextMedium, TextSmall } from "@/components/reusables/texts/Texts";
import { MemberProps } from "./types/MemberProps";

const MemberTile = ({
  id,
  name,
  email,
  check,
  checked,
  amountInput,
  selectMember,
  handleUpdateSplitAmount,
}: MemberProps) => {
  return (
    <div className='flex items-center justify-between gap-4 py-2 px-4 rounded-xl my-1 bg-gray-800'>
      <div className='flex items-center gap-2'>
        <span
          className='w-10 h-10 flex items-center justify-center bg-amber-50 rounded-full text-xl 
        text-gray-500'>
          {name ? name[0].toUpperCase() : email[0].toUpperCase()}
        </span>
        <div>
          <TextMedium>{name}</TextMedium>
          <TextSmall>{email}</TextSmall>
        </div>
      </div>
      <div>
        {check && (
          <div
            className={`${checked ? "bg-green-500" : "border border-white"} w-4 h-4 flex items-center 
            justify-center rounded cursor-pointer`}
            onClick={() => selectMember(id)}>
            {checked && <span>✓</span>}
          </div>
        )}
      </div>
      {amountInput && (
        <div className='text-gray-500 border-b'>
          <span className='pr-1'>₹</span>
          <input
            type='number'
            placeholder='0.00'
            className='w-16 h-auto focus:outline-none'
            // value={splitValue}
            // name={}
            onChange={(e) =>
              handleUpdateSplitAmount(id, parseFloat(e.target.value))
            }
          />
        </div>
      )}
    </div>
  );
};

export default MemberTile;
