import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  padding?: string;
  hoverColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  padding,
  hoverColor,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center ${color} border-none rounded-lg ${padding} hover:${hoverColor} transition`}
    >
      {children}
    </button>
  );
};
export default Button;
