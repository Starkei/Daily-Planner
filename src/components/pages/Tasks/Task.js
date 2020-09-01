import React from "react";

const Task = ({ name, checked }) => (
    <li>
        <span className="name">{name}</span>
        <span className="checked">
            <input type="checkbox" checked={checked} />
        </span>
    </li>
);

export default Task;
