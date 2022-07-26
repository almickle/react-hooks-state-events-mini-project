import React from "react";

function CategoryFilter({categories, handleChangeSelection, selectedCategory, onStateChange}) {

  const categoryButtons = categories.map(category => {

                          const isSelected = category === selectedCategory ? "selected" : ''

                      return <button key={category} className={isSelected} onClick={() => handleChangeSelection(category)} >{category}</button>
                })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
