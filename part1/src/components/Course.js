const Course = ({course}) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return(
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => 
      (<div key={part.id}>
        {part.name} {part.exercises}
      </div>))}
      <h3>total of {totalExercises} exercises</h3>
    </div>
  )}

  export default Course