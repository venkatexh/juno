export type TabProps = {
  selected: boolean;
  value: string;
  start: boolean;
  end: boolean;
  handleSelectTab: (tab: string) => void;
}