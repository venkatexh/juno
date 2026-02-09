import { SubmitButtonProps } from "./types/Button";

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

export { SubmitButton };
