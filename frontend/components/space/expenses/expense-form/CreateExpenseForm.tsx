import { ExpenseProps } from "../types/ExpenseProps";
import { useState } from "react";
import { useModal } from "@/contexts/modal-context";
import { useParams } from "next/navigation";
import axios from "axios";
import FirstStep from "./FormFirstStep";
import SecondStep from "./FormSecondStep";

const CreateExpenseForm = ({
  handleNewExpenseResponse,
}: {
  handleNewExpenseResponse: (expense: ExpenseProps) => void;
}) => {
  const params = useParams();
  const { closeModal } = useModal();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState("FIRST");
  const [date, setDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState({
    title: "",
    amount: null,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/spaces/${params?.id}/expenses`,
        formData,
      );
      if (res.status === 201) {
        handleNewExpenseResponse(res.data);
        closeModal();
        setDate(new Date());
        setFormData({
          title: "",
          amount: null,
        });
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error creating expense:", error);
      setErrorMessage("Error creating expense.");
    }
  };

  const StepMap = new Map();

  StepMap.set(
    "FIRST",
    <FirstStep
      title={formData.title}
      amount={formData.amount}
      date={date}
      handleFormChange={handleFormChange}
      setFormState={setFormState}
      setDate={setDate}
    />,
  );
  StepMap.set(
    "SECOND",
    <SecondStep
      handleFormSubmit={handleFormSubmit}
      setFormState={setFormState}
      errorMessage={errorMessage}
    />,
  );

  return StepMap.get(formState);
};

export default CreateExpenseForm;
