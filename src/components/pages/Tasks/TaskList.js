import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
    const result = tasks && tasks.length ? tasks.map((task) => <Task name={task.name} checked={task.checked} />) : "Error";
    return <ul>{result}</ul>;
};

export default TaskList;
