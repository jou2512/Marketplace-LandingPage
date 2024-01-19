type FormRowProps = {
  children: React.ReactNode;
  key?: string | number;
};

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">{children}</div>
    </div>
  );
};

export default FormRow;
