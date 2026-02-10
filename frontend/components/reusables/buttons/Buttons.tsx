import { AddButtonProps, SubmitButtonProps } from "./types/Button";

const SubmitButton = ({ className, text, onClick }: SubmitButtonProps) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      className={`${className} bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition 
      ease-in-out duration-200 cursor-pointer`}>
      {text || "Submit"}
    </button>
  );
};

const AddButton = ({ className, text, onClick, icon }: AddButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-between bg-pink-500 px-4 py-2 rounded 
      hover:bg-pink-600 text-white font-semibold transition 
      ease-in-out duration-200 cursor-pointer`}>
      <span className='mr-2'>{icon || "+"}</span>
      {text || "Add"}
    </button>
  );
};

const GeneralButton = ({ className, text, onClick }: SubmitButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition 
      ease-in-out duration-200 cursor-pointer`}>
      {text || "Go"}
    </button>
  );
};

export { SubmitButton, AddButton, GeneralButton };
