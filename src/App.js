import { Fragment } from 'react';

import Goals from './components/Goals/Goals';
import './App.css';

const goals = [
  {title: 'Master react', id: 'g1'},
  {title: 'Master nodejs', id: 'g2'},
  {title: 'Get a great job', id: 'g3'},
  {title: 'Build a house', id: 'g4'},
]

function App() {





  return (
    <Fragment>
      <div className='main'>
        <Goals goals={goals} />
      </div>
    </Fragment>
  );
}

export default App;
