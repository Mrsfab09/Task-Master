import { Center } from "@chakra-ui/layout";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Button from "../Button/Button";

interface HeadingProps {
  props: string;
}

const Heading: React.FC<HeadingProps> = ({ props }) => {
  return (
    <Center>
      <div className="">
        <h1 className="mt-20 font-bold text-4xl tracking-[10px]">{props}</h1>
        <Button>
          <FaRegMoon />
        </Button>
        <Button>
          <FiSun />
        </Button>
      </div>
    </Center>
  );
};
export default Heading;
