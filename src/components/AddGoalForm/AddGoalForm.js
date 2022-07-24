import styles from './AddGoalForm.module.css';

const AddGoalForm = () => {
    return (
        <form>
            <label htmlFor='goal'>Course goal</label>
            <input type='text' id='goal' />
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default AddGoalForm