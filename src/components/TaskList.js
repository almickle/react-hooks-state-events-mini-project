import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeletion}) {

  const taskElements = tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={onDeletion} task={task} />
  })

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
