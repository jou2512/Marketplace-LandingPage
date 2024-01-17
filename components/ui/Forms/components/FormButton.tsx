import React from "react";

type FormButtonProps = {
  buttonText: string;
  onClick?: () => void;
};

const FormButton: React.FC<FormButtonProps> = ({ buttonText, onClick }) => {
  return (
        <button
          className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
          onClick={onClick}
        >
          {buttonText}
        </button>
  );
};

export default FormButton;
