import React from "react";

function NewTaskForm({categories, onDataInput, onSelectInput, onSubmitForm}) {

const onlyCategories = categories.filter(each => each !== "All")

const optionsElements = onlyCategories.map(each => {
  return <option key={each}>{each}</option>
})

  return (
    <form className="new-task-form" onSubmit={onSubmitForm}>
      <label>
        Details
        <input type="text" name="text" onChange={onDataInput} />
      </label>
      <label>
        Category
        <select name="category" onChange={onSelectInput} >
          {optionsElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
