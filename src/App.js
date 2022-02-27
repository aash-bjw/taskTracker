import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Grocery Shopping',
        day: 'Feb 27th at 6:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Oil Change',
        day: 'March 7th at 3:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Pup Grooming',
        day: 'March 5th at 1:30pm',
        reminder: true
    },

])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
