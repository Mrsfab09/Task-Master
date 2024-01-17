import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  padding?: string;
  hoverColor?: string;
  onClick?: (event: MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  padding,
  hoverColor,
}) => {
  return (
    <button
      className={`flex flex-col justify-center ${color} border-none rounded-lg ${padding} hover:${hoverColor} transition`}
    >
      {children}
    </button>
  );
};
export default Button;
