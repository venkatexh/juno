import Tab from "./Tab";
import { TabsProps } from "./types/TabsProps";

export const Tabs = ({ selected, tabValues, handleSelectTab }: TabsProps) => {
  return (
    <div className='flex py-4'>
      {tabValues.map((tab, idx) => (
        <Tab
          key={tab}
          selected={selected === tab}
          value={tab}
          start={idx === 0}
          end={idx === tabValues.length - 1}
          handleSelectTab={handleSelectTab}
        />
      ))}
    </div>
  );
};
