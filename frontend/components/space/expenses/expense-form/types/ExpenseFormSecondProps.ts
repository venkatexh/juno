import { MemberProps } from "@/components/space/common/types/MemberProps";

export type ExpenseFormSecondProps = {
  handleFormSubmit: () => void;
  setFormState: (state: string) => void;
  handleSelectMember: (id: string) => void;
  handleUnequalSplit: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  members: MemberProps[];
  selectedMemberIds: string[];
  splitBalance: number;
};
