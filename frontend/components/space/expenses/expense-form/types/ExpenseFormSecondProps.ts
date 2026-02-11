import { MemberProps } from "@/components/space/common/types/MemberProps";

export type ExpenseFormSecondProps = {
  handleFormSubmit: () => void;
  setFormState: (state: string) => void;
  errorMessage: string;
  members: MemberProps[];
};
