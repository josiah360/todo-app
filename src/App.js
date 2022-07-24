import { Fragment, useState } from 'react';

import Goals from './components/Goals/Goals';
import './App.css';
import AddGoalForm from './components/AddGoalForm/AddGoalForm';

const DUMMY_GOALS = [
  {title: 'Master react', id: 'g1'},
  {title: 'Master nodejs', id: 'g2'},
  {title: 'Get a great job', id: 'g3'},
  {title: 'Build a house', id: 'g4'},
]

function App() {

  const [goals, setGoals] = useState(DUMMY_GOALS)

  const addGoalHandler = (newGoal) => {
    setGoals(prevGoals => [newGoal, ...prevGoals])
  }


  return (
    <Fragment>
      <div className='main'>
        <AddGoalForm addGoal={addGoalHandler} />
        <Goals goals={goals} />
      </div>
    </Fragment>
  );
}

export default App;
