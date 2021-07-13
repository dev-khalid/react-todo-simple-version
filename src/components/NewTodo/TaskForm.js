import React,{useState} from 'react'; 
import './TaskForm.css'; 
const TaskForm = (props) => { 
  //props to send data 
  const [task,setTask] = useState(''); 
  const [deadline,setDeadline] = useState(''); 
  const [invalid,setInvalid] = useState(false); 
  const [errorMessage,setErrorMessage]=useState('Please Enter a deadline'); 
  const inputHandler = (event) =>  { 
    setTask(event.target.value); 
  }
  const deadlineHandler = (event) => { 
    setDeadline(event.target.value); 
  }
  const newTaskFormHandler = (event) => { 
    event.preventDefault(); 
    //ebar ekta notun task name object toiri kora jak 
    if(task.length===0) { 
      setErrorMessage('Task filed can not be empty'); 
    }
    if(deadline.length===0) { 
      setErrorMessage('You must set a deadline to keep yourself focused.'); 
    }
    if(task.length===0 || deadline.length===0) {
      setInvalid(true); 
      return; 
    }
    const taskObj = {
      taskName: task, 
      deadline: deadline,
      id: Math.random().toString()
    } 
    props.newTask(taskObj); 
    console.log(taskObj); 
    setTask(''); 
    setDeadline(''); 
  }
  const closeModal = () => { 
    setInvalid(false); 
  }
  document.addEventListener('keydown',(event)=> { 
    if(event.key==='Escape') {
      closeModal(); 
    }
  })
  return (
    <div> 
      <div className="todo__form">
        <form className="form__control" onSubmit={newTaskFormHandler}>
          <div className="todo__input">
            <label for="todo__task">Insert Your task</label>
            <input type="text" id="todo__task" value={task} onChange={inputHandler}/>
          </div>
          <div className="todo-date">
            <label for="todo__deadline">DeadLine</label>
            <input type="date" id="todo__deadline" value={deadline} onChange={deadlineHandler}/>
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className={`modal ${invalid?'':'hidden'}`} >
        <h2 className="invalid">Invalid Input</h2>
        <div className="error-message">{errorMessage}</div>
        <button className="close" onClick={closeModal}>Close &times;</button>
      </div>
      <div className={`overlay ${invalid?'':'hidden'}`} onClick={closeModal}></div>
    </div> 
  ); 
}
export default TaskForm; 