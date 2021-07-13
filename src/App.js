import React ,{useState} from 'react'; 
import Todo from './components/Todo'; 
import './App.css';
const DUMMY_TASKS = [
  {taskName: 'Complete two React courses',deadline: '31-07-2021',id:'task1'},
  {taskName: 'Complete Node.js',deadline: '31-07-2021',id:'task2'},
  {taskName: 'Start Revising them . Work very hard',deadline: '31-07-2021',id:'task3'}
];

function App() {
  const [tasks,setTasks] = useState(DUMMY_TASKS); 
  const newTaskHandler = (task) => { 
    //need to insert it inside the array 
    setTasks((prevTasks)=> [task,...prevTasks]); 
  }
  return (
    <div className="App">
      <Todo tasks={tasks} newTask={newTaskHandler}/> 
    </div>
  );
}

export default App;
