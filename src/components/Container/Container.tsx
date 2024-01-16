import { Center } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Center>
      <div className="w-4/5 flex align-center justify-around p-20">
        {children}
      </div>
    </Center>
  );
};
export default Container;
