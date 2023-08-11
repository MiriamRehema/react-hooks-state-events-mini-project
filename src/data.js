export const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

export const TASKS = [
  {
    text: "Buy rice",
    category: "Food",
  },
  {
    text: "Save a tenner",
    category: "Money",
  },
  {
    text: "Build a todo app",
    category: "Code",
  },
  {
    text: "Build todo API",
    category: "Code",
  },
  {
    text: "Get an ISA",
    category: "Money",
  },
  {
    text: "Cook rice",
    category: "Food",
  },
  {
    text: "Tidy house",
    category: "Misc",
  },
];
/*import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks,setTasks]=useState(TASKS);
  const[selectedCategory,setSelectedCategory]=useState("All");
  
  const handleDeleteTask=(taskText)=>{
    setTasks(prevTasks=>prevTasks.filter(task=>task.test !== taskText));

  };
  const handleAddTask=(newTask)=>{
    setTasks(prevTasks=>[...prevTasks,newTask]);

  };
  const taskToDisplay=selectedCategory==='All'
                       ?tasks
                       ?tasks.filter(task=>task.category===selectedCategory):
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      onSelectCategories={setSelectedCategory}
      selectedCategory={selectedCategory}/>
      <NewTaskForm
      Ccategories={CATEGORIES.filter(cat=>cat !== 'All')}
      onTaskFormSubmit={handleAddTask} />
      <TaskList 
      tasks={tasksToDisplay} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;*/

