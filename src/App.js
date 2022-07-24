import { Fragment, useState } from 'react';

import Goals from './components/Goals/Goals';
import './App.css';
import AddGoalForm from './components/AddGoalForm/AddGoalForm';

const DUMMY_GOALS = [
  {title: 'Master react', id: '1'},
  {title: 'Master nodejs', id: '2'},
  {title: 'Get a great job', id: '3'},
  {title: 'Build a house', id: '4'},
]

function App() {

  const [goals, setGoals] = useState(DUMMY_GOALS)

  const addGoalHandler = (newGoal) => {
    setGoals(prevGoals => [newGoal, ...prevGoals])
  }

  const removeGoalHandler = (id) => {
    setGoals(goals.filter(goal => goal.id !== id))
  }

  return (
    <Fragment>
      <div className='main'>
        <AddGoalForm addGoal={addGoalHandler} />
        <Goals goals={goals} removeGoal={removeGoalHandler} />
      </div>
    </Fragment>
  );
}

export default App;
