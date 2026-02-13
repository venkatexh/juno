export type TabsProps = {
  selected: string;
  tabValues: string[];
  handleSelectTab: (tab: string) => void;
};
