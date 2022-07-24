import GoalItem from './GoalItem'
import styles from './Goals.module.css'

const Goals = (props) => {
    return (
        <ul className={styles.goals}>
            {props.goals.map(goal => 
                <GoalItem 
                    key={goal.id}
                    id={goal.id}
                    title={goal.title}
                />
            )}
        </ul>
        
    )
}

export default Goals