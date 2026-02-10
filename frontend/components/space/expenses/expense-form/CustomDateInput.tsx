import { forwardRef } from "react";
import { CustomDateInputProps } from "./types/CustomDateInputProps";
import "react-datepicker/dist/react-datepicker.css";

const CustomDateInput = forwardRef<HTMLButtonElement, CustomDateInputProps>(
  ({ value, onClick, className }, ref) => (
    <button type='button' className={className} onClick={onClick} ref={ref}>
      {value || "Select date"}
    </button>
  ),
);

CustomDateInput.displayName = "CustomDateInput";

export default CustomDateInput;
