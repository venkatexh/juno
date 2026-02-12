"use client"

import Links from "@/components/module/templates/Links";
import { ModuleProps } from "@/components/module/types/ModuleProps";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ModulePage = () => {

  const params = useParams();
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [module, setModule] = useState<ModuleProps>();

  useEffect(() => {
    const fetchModuleById = async () => {
      const res = await axios.get(`${baseURL}/modules/${params?.moduleId}`);
      setModule(res.data);
    }

    fetchModuleById();
  }, [params, baseURL]);

  const TemplateMap = new Map();
  TemplateMap.set('LINKS', <Links />);

  return (
    TemplateMap.get(module?.moduleType)
  )
}

export default ModulePage