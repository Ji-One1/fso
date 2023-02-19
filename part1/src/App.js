import { useState } from 'react'

const Course = ({course}) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return(
  <div>
    <h1>{course.name}</h1>
    {course.parts.map(part => 
    (<div>
      {part.name} {part.exercises}
    </div>))}
    <h3>total of {totalExercises} exercises</h3>
  </div>
)}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App