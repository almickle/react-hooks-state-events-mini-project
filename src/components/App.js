import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [input, setInput] = useState()
  const [selectInput, setSelectInput] = useState('Code')
  //const [updatedTaskList, setUpdatedTaskList] = useState([...tasksByCategory])

  function handleDeletion(incomingTask) {
    console.log(incomingTask)
    setTasks(tasks.filter(task => incomingTask.text !== task.text))
  }

  function handleChangeSelection(category) {
    setSelectedCategory(category)
    defineTaskSelection()
  }

  function defineTaskSelection() {
    if(selectedCategory === "All") {
      
      setTasks(TASKS)
    }
    else {
      setTasks(TASKS.filter(task => task.category === selectedCategory))
    }
  }

  function handleDataInput(event) {
    setInput(event.target.value)
    console.log(event.target.value)
  }

  function handleSelectInput(event) {
    setSelectInput(event.target.value)
    console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      text: input,
      category: selectInput
    }
    setTasks([...tasks, newTask])
   // setUpdatedTaskList([...tasksByCategory, newTask])
  }
 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleChangeSelection={handleChangeSelection} onStateChange={defineTaskSelection} />
      <NewTaskForm categories={CATEGORIES} onDataInput={handleDataInput} onSelectInput={handleSelectInput} onSubmitForm={handleSubmit} />
      <TaskList tasks={tasks} onDeletion={handleDeletion} />
    </div>
  );
}

export default App;
