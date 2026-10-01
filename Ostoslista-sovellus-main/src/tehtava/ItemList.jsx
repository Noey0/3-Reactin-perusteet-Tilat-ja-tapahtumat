import { useContext } from "react";
import { CartContext } from "../CartContext";

function ItemList() {
  const { items, removeItem } = useContext(CartContext);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => removeItem(item.id)}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
