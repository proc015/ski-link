

const Lesson = ( {lesson} ) => {
  return (
    <div className='Lesson'>
      <div className='lesson-text'>
            <p> Name: {lesson.name} </p>
            <p> Resort: {lesson.resort} </p>
            <p> Lesson Type: {lesson.lesson} </p>
            <p> Status: {lesson.status} </p>
            <br></br>
      </div>
    </div>
  )
}

export default Lesson
