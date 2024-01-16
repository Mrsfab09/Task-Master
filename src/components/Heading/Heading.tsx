import { Center } from "@chakra-ui/react";
import Mode from "../Mode/Mode";

interface HeadingProps {
  props: string;
}

const Heading: React.FC<HeadingProps> = ({ props }) => {
  return (
    <>
      <Center>
        <h1 className="text-neutral-500 font-semibold italic text-5xl tracking-widest mt-20 mb-10">
          {props}
        </h1>
      </Center>
      <Mode />
    </>
  );
};
export default Heading;
