import { Badge } from "@chakra-ui/layout";
import { MdOutlineTaskAlt } from "react-icons/md";
import Item from "./Item";

const Complete = () => {
  return (
    <div className="flex justify-between align-center">
      <div
        className={`min-w-72 min-h-96 bg-emerald-200 dark:bg-emerald-800 rounded-xl p-5 m-10`}
      >
        <div className="flex align-center gap-1">
          <MdOutlineTaskAlt color={"rgb(16 185 129)"} size={25} />
          <span className="ml-2">
            <Badge variant="solid" colorScheme="green">
              Complete
            </Badge>
          </span>
        </div>
        <Item colorItem="bg-emerald-300 dark:bg-emerald-500" />
      </div>
    </div>
  );
};
export default Complete;
