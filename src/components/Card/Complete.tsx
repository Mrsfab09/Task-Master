import { Badge } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";

interface CardProps {
  children: ReactNode;
}

const Complete: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex justify-between align-center">
      <div className={`min-w-72 min-h-96 bg-emerald-200 rounded-xl p-5 m-10`}>
        <div className="flex align-center">
          <MdOutlineTaskAlt size={25} color="green" />
          <span className="ml-2">
            <Badge variant="solid" colorScheme="green">
              Complete
            </Badge>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Complete;
