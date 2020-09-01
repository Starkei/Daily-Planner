import * as uuid from "uniqid";

const addTask = ({ name }) => {
    return {
        snapshot: {
            id: uuid(),
            name,
            dateStart: Date.now(),
        },
        type: "ADD_TASK",
    };
};

const toggleTask = (task) => {
    return {
        type: "TOGGLE_TASK",
        snapshot: {
            id: task.id,
        },
    };
};

export { addTask, toggleTask };
