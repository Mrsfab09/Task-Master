import { DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import Button from "../Button/Button";

interface ItemProps {
  colorItem: string;
}

const Item: React.FC<ItemProps> = ({ colorItem }) => {
  return (
    <div
      className={`flex flex-row align-center mt-7 ${colorItem} rounded-lg p-3 gap-5`}
    >
      <DragHandleIcon cursor={"grab"} marginTop={"3px"} />
      <div className="flex flex-row align-center gap-20">
        <p>Hello</p>
        <div className="flex gap-3">
          <Button color="bg-gray-100" padding="p-1" hoverColor="bg-gray-300">
            <EditIcon fontSize={15} />
          </Button>
          <Button color="bg-gray-100" padding="p-1" hoverColor="bg-gray-300">
            G
          </Button>
          <Button color="bg-gray-100" padding="p-1" hoverColor="bg-gray-300">
            G
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Item;
