import React, { useState } from "react";
import {DayElement} from "./DayElement";

export const MonthDaysElements = (props) => { 
    const {viewedYear, viewedMonth, language, selectedColor} = props;
    const numOfDaysInMonth = new Date(viewedYear, viewedMonth + 1, 0).getDate();
    console.log(numOfDaysInMonth);
    const dayToBeginTheMonthFrom = new Date(viewedYear, viewedMonth, 1).getDay();
    const selectedDaysState = useState([]);
    const hoveredDayState = useState(null);
    const [monthDays, setMonthDays] = useState({"year": viewedYear, "month": viewedMonth, "array": []});
    let tempMonthDaysArray = [];

    for(var i = 0; i < numOfDaysInMonth; i++) {
        tempMonthDaysArray.push(i + 1);
    }
    if ((monthDays.year !== viewedYear && monthDays.month !== viewedMonth) || monthDays.array.length === 0) {
        setMonthDays({"year": viewedYear, "month": viewedMonth, "array": tempMonthDaysArray});
    }

    return monthDays.array.map((day) => {
        const date = new Date(viewedYear, viewedMonth, day);
        const columnOnGrid = (day + dayToBeginTheMonthFrom) % 7;
        const dayOfWeek = date.getDay();
        const genericStyle = (language === "English") ? { 
            gridColumn: columnOnGrid === 0 ? 7 : columnOnGrid,
            gridRow: (dayOfWeek >= (day % 7 ) ? Math.floor(day / 7+ 2)  : Math.floor(day / 7+ 3))
        } : (language === "Hebrew") && { 
            gridColumn: columnOnGrid === 0 ? 1 : 8 - columnOnGrid,
            gridRow: (dayOfWeek >= (day % 7 ) ? Math.floor(day / 7+ 2)  : Math.floor(day / 7+ 3) )
        };

        return (
            <DayElement
                key={Math.random()} // TODO: change
                date={new Date(viewedYear, viewedMonth, day)}
                selectedDaysState={selectedDaysState}
                hoveredDayState={hoveredDayState}
                selectedColor={selectedColor}
                dayOfWeek={dayOfWeek}
                genericStyle={genericStyle}
            />
        );
    });
};