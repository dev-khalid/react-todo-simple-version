import React from 'react'; 
import TaskList from './TaskList'; 
import TaskForm from './NewTodo/TaskForm'; 
const Todo = (props) => { 
  const onAddNewTaskHandler = (task) =>  { 
    //we will then send this to app.js
    props.newTask(task); 
  }
  return (<div className="todo"> 
    <TaskForm newTask={onAddNewTaskHandler}/> 
    <TaskList tasks={props.tasks}/>
  </div>); 
}
export default Todo;  