import { Center } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Center>
      <div className="w-4/5 flex align-center justify-around m-20 p-20 mt-10">
        {children}
      </div>
    </Center>
  );
};
export default Container;
