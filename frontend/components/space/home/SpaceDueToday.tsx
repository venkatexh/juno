import { TextLarge } from "@/components/reusables/texts/Texts";

const SpaceDueToday = () => {
  return (
    <div className='w-1/2 border border-gray-500 rounded-xl px-12 py-6'>
      <TextLarge className='mb-4'>Due today</TextLarge>
      <div className='flex flex-col gap-2'>
        <div>Walk Dog</div>
        <div>Eat ice cream</div>
        <div>Fix door</div>
        <div>Forget to buy milk</div>
      </div>
    </div>
  );
};

export default SpaceDueToday;
