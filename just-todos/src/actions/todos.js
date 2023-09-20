import API from 'goals-todos-api';

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
};

const removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id,
    }
}

const toggleTodoAction = (id) => {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

const handleAddTodo = (name, cb) => {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodoAction(todo));
                cb();
            })
            .catch(() => {
                alert('There was an error. Try again.');
            });
    }
}

const handleDeleteTodo = (todo) => {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id));

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodoAction(todo));
                alert('An error occurred. Try again.');
            });
    }
}

const handleToggleTodo = (id) => {
    return (dispatch) => {
        dispatch(toggleTodoAction(id));

        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodoAction(id));
                alert('An error occurred. Try again.');
            });
    }
}

export { handleToggleTodo, handleDeleteTodo, handleAddTodo, ADD_TODO, REMOVE_TODO, TOGGLE_TODO };
