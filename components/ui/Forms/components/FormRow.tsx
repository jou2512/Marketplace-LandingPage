type FormRowProps = {
  children: React.ReactNode;
};

const FormRow: React.FC<FormRowProps> = ({ children }) => {
  return <div className="flex flex-wrap -mx-3 mb-4">{children}</div>;
};


export default FormRow;