import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: string;
  padding: string;
  hoverColor: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  padding,
  hoverColor,
}) => {
  return (
    <button
      className={`${color} border-none rounded-lg ${padding} hover:${hoverColor}`}
    >
      {children}
    </button>
  );
};
export default Button;
