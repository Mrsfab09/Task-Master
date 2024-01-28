import { AddIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/layout";
import { GoTasklist } from "react-icons/go";
import { ReactNode, useState } from "react";
import { Button } from "@chakra-ui/react";

interface CardProps {
  children: ReactNode;
}

const Todo: React.FC<CardProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
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
          <Button
            leftIcon={<AddIcon color="rgb(2 132 199)" marginTop={"4"} />}
            marginTop={"1"}
            variant={"unstyled"}
            color={"rgb(2 132 199)"}
            onClick={openModal}
          >
            New
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
