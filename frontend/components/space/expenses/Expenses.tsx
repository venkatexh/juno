"use client";

import axios from "axios";
import ExpenseCard from "./ExpenseCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ExpenseProps } from "./types/ExpenseProps";
import { TextSmall } from "@/components/reusables/texts/Texts";
import { AddButton } from "@/components/reusables/buttons/Buttons";
import { useModal } from "@/contexts/modal-context";
import CreateExpenseForm from "./expense-form/CreateExpenseForm";

const Expenses = () => {
  const params = useParams();
  const { openModal } = useModal();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [expenses, setExpenses] = useState<ExpenseProps[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await axios.get(`${baseURL}/spaces/${params?.id}/expenses`);
      setExpenses(res.data);
    };

    fetchExpenses();
  }, [params?.id, baseURL]);

  const addNewExpenseToList = (expense: ExpenseProps) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const handleOpenNewExpense = () => {
    openModal(
      <CreateExpenseForm
        handleNewExpenseResponse={(expense: ExpenseProps) =>
          addNewExpenseToList(expense)
        }
      />,
    );
  };

  return (
    <div className='w-3/5 h-full flex flex-col justify-between p-6 bg-gray-900 rounded-2xl'>
      <div>
        <TextSmall className='mb-2'>February 2025</TextSmall>
        {expenses.map((expense: ExpenseProps) => (
          <ExpenseCard
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </div>
      <div className='flex items-center justify-end'>
        <AddButton
          className='mt-4'
          text='Expense'
          icon=''
          onClick={() => {
            handleOpenNewExpense();
          }}
        />
      </div>
    </div>
  );
};

export default Expenses;
