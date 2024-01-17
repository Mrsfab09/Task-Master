import { DragHandleIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
interface ItemProps {
  colorItem: string;
}

const Item: React.FC<ItemProps> = ({ colorItem }) => {
  return (
    <div
      className={`flex flex-row align-center mt-7 ${colorItem} rounded-lg p-3 gap-5`}
    >
      <DragHandleIcon cursor={"grab"} marginTop={"3px"} />
      <div className="flex flex-row align-center gap-28">
        <p>Hello</p>
        <div className="flex align-center gap-4">
          <EditIcon onClick={() => {}} marginTop={"3px"} cursor={"pointer"} />
          <DeleteIcon onClick={() => {}} marginTop={"3px"} cursor={"pointer"} />
        </div>
      </div>
    </div>
  );
};
export default Item;
