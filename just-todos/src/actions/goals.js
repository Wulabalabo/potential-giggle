import API from 'goals-todos-api';

const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

const addGoalAction = (goal) => {
    return {
        type: ADD_GOAL,
        goal
    }
};

const removeGoalAction = (id) => {  
    return {
        type: REMOVE_GOAL,
        id,
    }
};

const handleAddGoal = (name, cb) => {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoalAction(goal));
                cb();
            })
            .catch(() => {
                alert('There was an error. Try again.');
            });
    }
};

const handleDeleteGoal = (goal) => {
    return (dispatch) => {
        dispatch(removeGoalAction(goal.id));

        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoalAction(goal));
                alert('An error occurred. Try again.');
            });
    }
};

export { ADD_GOAL, REMOVE_GOAL, handleAddGoal, handleDeleteGoal };