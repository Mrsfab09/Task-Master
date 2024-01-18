import { Center } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Center>
      <div className="align-center justify-around p-20 gap-20 md:flex">
        {children}
      </div>
    </Center>
  );
};
export default Container;
