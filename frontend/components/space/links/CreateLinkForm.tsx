import axios from "axios";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useModal } from "@/contexts/modal-context";
import { TextLarge } from "@/components/reusables/texts/Texts";
import { SubmitButton } from "@/components/reusables/buttons/Buttons";
import { Input, TextArea } from "@/components/reusables/form-elements/Inputs";
import { LinkType } from "./types/Link";

const CreateLinkForm = ({
  handleNewLinkResponse,
}: {
  handleNewLinkResponse: (link: LinkType) => void;
}) => {
  const params = useParams();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { closeModal } = useModal();
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    const res = await axios.post(
      `${baseUrl}/api/modules/${params?.moduleId}/links`,
      {
        ...formData,
        moduleId: params?.moduleId,
      },
      {
        withCredentials: true,
      },
    );
    if (res.status === 201) {
      handleNewLinkResponse(res.data);
      closeModal();
      setFormData({
        url: "",
        title: "",
        description: "",
      });
    } else {
      setError("Error creating link.");
    }
  };

  return (
    <div className=''>
      <TextLarge>Create a new link</TextLarge>
      <form className='flex flex-col gap-4 pt-6' onSubmit={handleSubmit}>
        <Input
          type='url'
          noLabel={true}
          placeholder='Paste URL'
          value={formData.url}
          name='url'
          onChange={handleChange}
        />
        <Input
          type='text'
          noLabel={true}
          placeholder='Link name'
          value={formData.title}
          name='title'
          onChange={handleChange}
        />
        <TextArea
          noLabel={true}
          placeholder='Link description'
          value={formData.description}
          name='description'
          resizeNone={true}
          onChange={handleChange}
        />
        <SubmitButton text='Create link' onClick={() => {}} />
      </form>
      {error != "" && (
        <div className='w-full text-red-700 text-sm mx-auto py-4'>{error}</div>
      )}
    </div>
  );
};

export default CreateLinkForm;
