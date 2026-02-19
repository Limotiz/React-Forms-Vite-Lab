import React, { useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";

function ShoppingList({ items }) {
  const [shoppingItems, setShoppingItems] = useState(items);

  function handleAddItem(newItem) {
    setShoppingItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div>
      <ItemForm onItemFormSubmit={handleAddItem} />

      <ul>
        {shoppingItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
