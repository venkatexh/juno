import axios from "axios";
import { GeneralButton } from "../reusables/buttons/Buttons";
import { TextLarge } from "../reusables/texts/Texts";
import { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { TemplateFields } from "./types/TemplateFields";

const CreateModuleForm = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [templates, setTemplates] = useState<TemplateFields[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  useEffect(() => {
    const fetchTemplates = async () => {
      const response = await axios.get(`${baseURL}/modules/templates`);
      setTemplates(response.data);
    };

    fetchTemplates();
  });

  const handleNextClick = () => {};

  return (
    <div className='w-full h-full flex flex-col justify-between'>
      <div>
        <TextLarge>Choose a template</TextLarge>
        <div className='grid grid-cols-2 gap-4 py-4 overflow-y-scroll'>
          {templates.map((template: TemplateFields) => (
            <TemplateCard
              key={template.id}
              id={template.id}
              name={template.name}
              description={template.description}
              subscriptionType={template.subscriptionType}
              imageURL={template.imageURL}
              handleSetSelectedTemplate={(id) => setSelectedTemplate(id)}
              selected={selectedTemplate === template.id}
            />
          ))}
        </div>
      </div>
      <div className='flex'>
        <GeneralButton
          text='Next'
          className='ml-auto'
          onClick={() => handleNextClick()}
        />
      </div>
    </div>
  );
};

export default CreateModuleForm;
