import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Button from "../Button/Button";

const Mode = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-12">
      <Button color="bg-neutral-100" padding="p-3">
        <FiSun />
      </Button>
      <Button color="bg-neutral-100" padding="p-3">
        <FaRegMoon />
      </Button>
    </div>
  );
};
export default Mode;
