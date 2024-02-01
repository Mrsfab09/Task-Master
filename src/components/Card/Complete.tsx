import { Badge } from "@chakra-ui/layout";
import { MdOutlineTaskAlt } from "react-icons/md";

const Complete = () => {
  return (
    <div className="flex justify-between align-center">
      <div className={`min-w-72 min-h-96 bg-emerald-200 rounded-xl p-5 m-10`}>
        <div className="flex align-center gap-1">
          <MdOutlineTaskAlt color={"rgb(16 185 129)"} size={25} />
          <span className="ml-2">
            <Badge variant="solid" colorScheme="green">
              Complete
            </Badge>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Complete;
