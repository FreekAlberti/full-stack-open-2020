import React from "react"

const sum = (element) => {
    let sum = 0;
    for (let i= 0; i < element.parts.length; ++i) {
        sum += element.parts[i].exercises;
    }
    return sum
}

const Total = ({course}) => {
    return (
        <>
            <h3>total of {sum(course)} exercises</h3>
        </>
    );
}

export default Total