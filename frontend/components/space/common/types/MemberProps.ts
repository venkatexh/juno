export type MemberProps = {
  id: string;
  name: string;
  displayName?: string;
  email: string;
  check?: boolean;
  checked?: boolean;
  selectMember: (id: string) => void | null;
};
