import { useState } from 'react';

import styles from './AddGoalForm.module.css';

const AddGoalForm = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalChangeHandler = (e) => {
        setEnteredGoal(e.target.value)
    }

    const goalSubmitHandler = (e) => {
        e.preventDefault()

        const newGoal = {
            title: enteredGoal,
            id: Math.random().toString()
        }

        props.addGoal(newGoal)

        setEnteredGoal('')
    }

    return (
        <form className={styles.form} onSubmit={goalSubmitHandler}>
            <label htmlFor='goal'>Course goal</label>
            <input type='text' value={enteredGoal} id='goal' onChange={goalChangeHandler} />
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default AddGoalForm