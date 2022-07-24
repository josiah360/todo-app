import styles from './GoalItem.module.css';

const GoalItem = (props) => {
    return (
        <li className={styles['goal-item']} onClick={() => props.removeGoal(props.id)}>{props.title}</li>
    )
}

export default GoalItem