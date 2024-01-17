import React from "react";

type FormButtonProps = {
  buttonText: string;
  onClick?: () => void;
};

const FormButton: React.FC<FormButtonProps> = ({ buttonText, onClick }) => {
  return (
    <div className="flex flex-wrap -mx-3 mt-6">
      <div className="w-full px-3">
        <button
          className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default FormButton;
