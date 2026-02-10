"use client";

import axios from "axios";
import ExpenseCard from "./ExpenseCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ExpenseProps } from "./types/ExpenseProps";
import { TextSmall } from "@/components/reusables/texts/Texts";

const Expenses = () => {
  const params = useParams();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await axios.get(`${baseURL}/spaces/${params?.id}/expenses`);
      setExpenses(res.data);
    };

    fetchExpenses();
  }, [params?.id, baseURL]);

  return (
    <div className='w-3/5 h-full p-6 bg-gray-900 rounded-2xl'>
      <TextSmall className='mb-2'>February 2025</TextSmall>
      {expenses.map((expense: ExpenseProps) => (
        <ExpenseCard
          key={expense.id}
          title={expense.title}
          expenseDate={expense.expenseDate}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
