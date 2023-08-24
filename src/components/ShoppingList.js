import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
    // console.log(searchValue);
  }


  const itemsToDisplay = items.filter((item) => {
    
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsToDisplaySearchFintered = itemsToDisplay.filter((item) => {
    for (let i = 0; i < searchValue.length; i++) {
      if (item.name.charAt(0).toLowerCase() !== searchValue.charAt(i).toLowerCase()) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="ShoppingList">
      <ItemForm addItem= {addItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplaySearchFintered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
