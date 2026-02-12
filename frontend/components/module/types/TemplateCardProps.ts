export type TemplateCardProps = {
  id: string;
  name: string;
  description: string;
  selected: boolean;
  subscriptionType: string;
  imageURL: string;
  handleSetSelectedTemplate: (id: string) => void;
};
