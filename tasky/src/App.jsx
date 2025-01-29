import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash the dishes"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away"/>
      <Task title="Tidy" deadline="Today" description="Tidy up the bedroom"/>
    </div>
  );
}


export default App;
