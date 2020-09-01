import React from "react";
import Calendar from "./Calendar";
import TaskList from "./TaskList";
import { Route, Link } from "react-router-dom";
import { TaskService } from "../../../services/TaskServer";

const Tasks = () => {
    //TODO: Add error handling
    //TODO: Add from
    const tasks = TaskService.getTasksByUserID("12345");
    return (
        <>
            <div>
                <form>
                    <input type="text" placeholder="Enter task name" />
                    <input type="date" />
                    <input type="time" />
                    <input type="submit" value="Add" />
                </form>
                <Link to="/tasks/calendar">Open Calendar</Link>
            </div>
            <Route path="/tasks/calendar" component={Calendar} />
            <Route path="/tasks/list/:date" component={TaskList} />
        </>
    );
};

export { Tasks };
