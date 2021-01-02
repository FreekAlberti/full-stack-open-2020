import React from "react"

const Total = ({course}) => {
    const initialValue = 0;
    const total = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, initialValue);

    return (
        <>
            <h3>total of {total} exercises</h3>
        </>
    );
}

export default Total