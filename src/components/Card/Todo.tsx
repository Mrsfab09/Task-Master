import { Badge } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Todo: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex justify-between align-center">
      <div className={`min-w-72 min-h-96 bg-blue-200 rounded-xl p-5 m-10`}>
        <div className="flex align-center">
          <span className="ml-2">
            <Badge variant="solid" colorScheme="blue">
              Todo
            </Badge>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Todo;
