import React from 'react'; 
import './TaskList.css'; 

const TaskList = (props) =>  {   
  return (<div className="todo__list-container" > 
    <ul className="todo__list">
          {
            props.tasks.map(task=> (
              <li key={task.id}>
                <span className="task">{task.taskName} </span>
                <span className="deadline-date">{task.deadline}</span>
              </li>
            ))
          }
          
    </ul>
  </div>
  ); 
}; 
export default TaskList; 