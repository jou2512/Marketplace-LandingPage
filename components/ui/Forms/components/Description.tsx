import React, { ReactNode } from "react";

type DescriptionProps = {
  content: ReactNode;
};

const Description: React.FC<DescriptionProps> = ({ content }) => {
  return <div className="text-sm text-gray-500 text-center">{content}</div>;
};

export default Description;
