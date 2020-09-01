import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calendar = () => {
    const currentDate = new Date();
    let [month, setMonth] = useState(currentDate.getMonth() + 1);
    let [year, setYear] = useState(currentDate.getFullYear());
    let [days, setDays] = useState(new Date(year, month, 0).getDate());

    const getDaysTable = (days) => {
        return Array.from(Array(days).keys()).map((day) => {
            const dateInMilliseconds = new Date(year, month, day).getTime();
            return (
                <Link key={dateInMilliseconds} to={`/tasks/list/${dateInMilliseconds}`}>
                    {day + 1}
                </Link>
            );
        });
    };

    const calendar = getDaysTable(days);
    const onClick = ({ target }) => {
        if (target.name === "next") {
            month++;
            if (month > 12) {
                year++;
                month = 0;
            }
        } else {
            month--;
            if (month < 1) {
                year--;
                month = 12;
            }
        }
        setMonth(month);
        setYear(year);
        days = new Date(year, month, 0).getDate();
        setDays(days);
    };

    return (
        <div>
            <button name="prev" onClick={onClick}>
                &lt;
            </button>
            {month}, {year}
            <button name="next" onClick={onClick}>
                &gt;
            </button>
            <div>{calendar}</div>
        </div>
    );
};

export default Calendar;
