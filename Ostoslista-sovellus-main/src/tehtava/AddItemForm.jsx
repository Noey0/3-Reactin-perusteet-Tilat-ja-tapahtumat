import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

function AddItemForm() {
  const { addItem } = useContext(CartContext);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (inputValue === "") return;

    addItem(inputValue);

    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita ostos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button type="submit">Lisää</button>
    </form>
  );
}

export default AddItemForm;
