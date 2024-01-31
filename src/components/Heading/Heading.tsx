import { Center } from "@chakra-ui/react";

interface HeadingProps {
  children: string;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <>
      <Center>
        <h1 className="text-neutral-500 font-semibold italic text-5xl tracking-widest mt-20 mb-10">
          {children}
        </h1>
      </Center>
    </>
  );
};
export default Heading;
