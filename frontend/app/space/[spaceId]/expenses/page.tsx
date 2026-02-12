import Expenses from "@/components/space/expenses/Expenses";
import ExpenseSummary from "@/components/space/expenses/ExpenseSummary";

const ExpensesPage = () => {
  return (
    <div className='w-full h-screen p-12 flex gap-12'>
      <Expenses />
      <ExpenseSummary />
    </div>
  );
};

export default ExpensesPage;
