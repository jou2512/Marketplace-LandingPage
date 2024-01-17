type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children?: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form {...props}>
      {children}
    </form>
  );
};

export default Form;