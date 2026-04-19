import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import TemplateCard from "./TemplateCard";
import { TextLarge } from "@/components/reusables/texts/Texts";
import { Input } from "@/components/reusables/form-elements/Inputs";
import { SubmitButton } from "@/components/reusables/buttons/Buttons";

import { TemplateFields } from "./types/TemplateFields";

const CreateModuleForm = () => {
  const params = useParams();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [moduleName, setModuleName] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [templates, setTemplates] = useState<TemplateFields[]>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await axios.get(`${baseURL}/api/modules/templates`, {
        withCredentials: true,
      });
      if (res.status === 200 || res.status === 201) {
        setTemplates(res.data);
      }
    };

    fetchTemplates();
  }, [baseURL]);

  const handleFormSubmit = () => {
    const moduleBody = {
      name: moduleName,
      templateId: selectedTemplateId,
      spaceId: params?.id,
      // Hard coded
      createdByUserId: "207aaca1-3904-4d70-a342-760fdb73199d",
    };

    axios
      .post(`${baseURL}/modules`, moduleBody)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <div className="h-8/10">
        <TextLarge className="mb-4">Choose a template</TextLarge>
        <div className='w-full h-full grid grid-cols-2 gap-4  pr-6 overflow-y-scroll'>
          {templates.map((template: TemplateFields) => (
            <TemplateCard
              key={template.id}
              id={template.id}
              name={template.name}
              description={template.description}
              subscriptionType={template.subscriptionType}
              imageURL={template.imageURL}
              handleSetSelectedTemplate={(id) => setSelectedTemplateId(id)}
              selected={selectedTemplateId === template.id}
            />
          ))}
        </div>
      </div>
      <div className='w-full flex items-center justify-between'>
        <Input
          type='text'
          name='name'
          placeholder='Enter module name'
          onChange={(e) => setModuleName(e.target.value)}
          value={moduleName}
          maxLength={20}
        />
        <SubmitButton
          text='Create'
          className='ml-12'
          onClick={() => handleFormSubmit()}
        />
      </div>
    </div>
  );
};

export default CreateModuleForm;
