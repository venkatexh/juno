import { ExpenseProps } from "../types/ExpenseProps";
import { useEffect, useState } from "react";
import { useModal } from "@/contexts/modal-context";
import { useParams } from "next/navigation";
import axios from "axios";
import FirstStep from "./FormFirstStep";
import SecondStep from "./FormSecondStep";
import { MemberProps } from "../../common/types/MemberProps";

type SplitFields = {
  userId: string;
  amount: string;
  splitType: string;
};
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
  const [members, setMembers] = useState([]);
  const [date, setDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState({
    title: "",
    amount: null,
  });
  const [selectedMemberIds, setSelectedMemberIds] = useState<string[]>([]);
  const [unequalSplits, setUnequalSplits] = useState<SplitFields[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await axios.get(
        `${baseURL}/spaces/${params?.spaceId}/members`,
      );
      setMembers(res.data);
      setSelectedMemberIds(res.data.map((member: MemberProps) => member.id));
    };
    fetchMembers();
  }, [params, baseURL]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectMember = (id: string) => {
    if (selectedMemberIds.includes(id)) {
      setSelectedMemberIds(
        selectedMemberIds.filter((memberId) => memberId !== id),
      );
    } else {
      setSelectedMemberIds([...selectedMemberIds, id]);
    }
  };

  const handleUnequalSplit = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const foundSplit = unequalSplits.find((split) => split.userId === id);
    if (foundSplit) {
      setUnequalSplits((prevSplits) => [
        ...prevSplits.filter((split) => split.userId !== id, {
          userId: id,
          amount: e.target.value,
          splitType: "UNEQUAL",
        }),
      ]);
    }
    setUnequalSplits((prevSplits) => [
      ...prevSplits,
      { userId: id, amount: e.target.value, splitType: "UNEQUAL" },
    ]);
  };

  const handleFormSubmit = async () => {
    // try {
    //   const res = await axios.post(
    //     `${baseURL}/spaces/${params?.id}/expenses`,
    //     formData,
    //   );
    //   if (res.status === 201) {
    //     handleNewExpenseResponse(res.data);
    //     closeModal();
    //     setDate(new Date());
    //     setFormData({
    //       title: "",
    //       amount: null,
    //     });
    //     setErrorMessage("");
    //   }
    // } catch (error) {
    //   console.error("Error creating expense:", error);
    //   setErrorMessage("Error creating expense.");
    // }

    console.log(
      {
        splits: selectedMemberIds.map((memberId) => ({
          userId: memberId,
          amount: formData.amount
            ? formData.amount / selectedMemberIds.length
            : 0,
          splitType: "EQUAL",
        })),
      },
      unequalSplits.map((split) => ({
        userId: split.userId,
        amount: Number(split.amount),
        splitType: "UNEQUAL",
      })),
    );
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
      handleSelectMember={handleSelectMember}
      handleUnequalSplit={(id, e) => handleUnequalSplit(id, e)}
      setFormState={setFormState}
      errorMessage={errorMessage}
      members={members}
      selectedMemberIds={selectedMemberIds}
      splitBalance={
        Number(formData.amount) -
        unequalSplits.reduce((total, split) => total + Number(split.amount), 0)
      }
    />,
  );

  return StepMap.get(formState);
};

export default CreateExpenseForm;
