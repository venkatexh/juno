export type MemberProps = {
  id: string;
  name: string;
  displayName?: string;
  email: string;
  check?: boolean;
  checked?: boolean;
  amountInput?: boolean;
  handleUpdateSplitAmount: (id: string, amount: number) => void | null;
  selectMember: (id: string) => void | null;
};
