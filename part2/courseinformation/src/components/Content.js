import React from "react"
import Part from "./Part"

const Content = ({course}) => {
    return (
      <>
        {course.parts.map((part, i) => 
        <Part key={i} part={part}/>)}
      </>
    );
}

export default Content