import { TabProps } from "./types/TabProps";

const Tab = ({ selected, value, start, end, handleSelectTab }: TabProps) => {
  return (
    <div
      className={`${selected ? "bg-blue-900 cursor-default" : "text-gray-400 cursor-pointer"}
        px-4 py-1 border ${!start && !end && "border-r-0"} border-blue-900 ${start && "rounded-xl rounded-r-none border-r-0"} ${end && "rounded-xl rounded-l-none"}`}
      onClick={() => handleSelectTab(value)}>
      {value[0] + value.slice(1).toLowerCase()}
    </div>
  );
};

export default Tab;
