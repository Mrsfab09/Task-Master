import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-neutral-100 border-none rounded-lg p-3">
      {children}
    </button>
  );
};
export default Button;
