import {combineReducers} from 'redux';

import todos from './todos';
import loading from './loading';
import goal from './goals';

export default combineReducers({
    todos,
    loading,
    goal,
});
