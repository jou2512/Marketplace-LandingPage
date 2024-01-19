type FormButtonProps = {
  buttonText: string;
  ButtonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
};

const FormButton: React.FC<FormButtonProps> = ({
  buttonText,
  ButtonType="submit",
  onClick,
}) => {
  return (
    <button
      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
      type={ButtonType}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default FormButton;
