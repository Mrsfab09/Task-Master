interface ItemProps {
  colorItem: string;
}

const Item: React.FC<ItemProps> = ({ colorItem }) => {
  return (
    <div className={`flex align-center mt-7 ${colorItem} rounded-lg p-2`}>
      Hello
    </div>
  );
};
export default Item;
