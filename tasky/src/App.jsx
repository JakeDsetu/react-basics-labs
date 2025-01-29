import './App.css';
import Task from './components/task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", prioritylow: "Low"},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priorityhigh: "High"},
      { id: 3, title: "Tidy up", description: "Tidy the bedroom", deadline: "Today", prioritymedium: "Medium" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      priorityhigh={task.priorityhigh}
      prioritymedium={task.prioritymedium}
      prioritylow={task.prioritylow}
      key={task.id}
    />
  ))}
    </div>
  );

}


export default App;
