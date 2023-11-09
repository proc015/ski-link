import moment from "moment"; 

const Lesson = ( {lesson} ) => {
  return (
    <div className='Lesson'>
      <div className='lesson-text-container'>
            <p> Name: {lesson.name} </p>
            <p> Resort: {lesson.resort} </p>
            <p> Lesson Type: {lesson.level} </p>
            <p> Date: {moment(lesson.date).format("MMMM Do, YYYY")} </p>
            <p> Status: {lesson.status} </p>
            <br></br>
      </div>
    </div>
  )
}

export default Lesson
