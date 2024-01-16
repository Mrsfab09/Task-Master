import { FaRegMoon } from "react-icons/fa";
import Button from "../Button/Button";
import { FiSun } from "react-icons/fi";
// import { useState } from "react";

// interface ModeProps {
//   onClick: void;
//   onChange: void;
// }

const Mode = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-12">
      <Button color="bg-neutral-100" padding="p-3" hoverColor="bg-neutral-200">
        <FaRegMoon />
      </Button>
      <Button color="bg-neutral-100" padding="p-3" hoverColor="bg-neutral-200">
        <FiSun />
      </Button>
    </div>
  );
};
export default Mode;
