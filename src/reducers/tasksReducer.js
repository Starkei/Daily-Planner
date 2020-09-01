import { ADD_TASK, TOGGLE_TASK } from "../actions/actionTypes";

const tasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.snapshot];
        case TOGGLE_TASK:
            return state.map((task) => {
                if (task.id === action.snapshot.id) {
                    return {
                        ...task,
                        dateEnd: !task.checked ? Date.now() : undefined,
                        checked: !task.checked,
                    };
                }
                return task;
            });
        default:
            return state;
    }
};

export default tasksReducer;
