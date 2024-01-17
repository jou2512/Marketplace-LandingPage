type InputWithLabelProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  label,
  placeholder,
  type,
  required,
}) => {
  return (
    <>
      <label
        className="block text-gray-300 text-sm font-medium mb-1"
        htmlFor={id}
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="form-input w-full text-gray-300"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default InputWithLabel;