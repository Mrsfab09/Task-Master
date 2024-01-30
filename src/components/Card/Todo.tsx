import { Badge } from "@chakra-ui/layout";
import { GoTasklist } from "react-icons/go";
import { ReactNode } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
interface CardProps {
  children: ReactNode;
}

const Todo: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex justify-between align-center">
      <div className="min-w-72 max-w-md bg-blue-200 rounded-xl p-5 m-10 overflow-y-auto">
        <div className="flex align-center gap-1">
          <GoTasklist color={"rgb(2 132 199)"} size={25} />
          <span className="ml-2">
            <Badge variant="solid" colorScheme="blue">
              Todo
            </Badge>
          </span>
        </div>
        {children}
        <div className="w-full flex align-center mt-60 rounded cursor-pointer p-1 gap-2">
          <ModalContainer />
        </div>
      </div>
    </div>
  );
};
export default Todo;
