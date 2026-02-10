export type ExpenseFormFirstProps = {
  title: string;
  amount: number | null;
  date: Date | null;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
};
