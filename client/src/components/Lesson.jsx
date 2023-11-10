import moment from "moment"; 
import { acceptLesson, rejectLesson } from "../apiService";
import sortLessons from "../utils/sortLessons";

const Lesson = ( {lesson, setLessons} ) => {
  
  
  function handleAccept () {
    acceptLesson(lesson._id).then((updatedLesson) => {
      setLessons(prev => {
        const filteredLessons = prev.filter(el => el._id !== lesson._id);
        return sortLessons([...filteredLessons, updatedLesson]);
      })
  })
}
    

function handleReject () {
  rejectLesson(lesson._id).then((updatedLesson) => {
    setLessons(prev => {
      const filteredLessons = prev.filter(el => el._id !== lesson._id);
      return sortLessons([...filteredLessons, updatedLesson]);
    })
})
}
  
  

  return (
    <div className='Lesson'>
      <div className='lesson-text-container'>
            <p> Name: {lesson.name} </p>
            <p> Resort: {lesson.resort} </p>
            <p> Lesson Type: {lesson.level} </p>
            <p> Date: {moment(lesson.date).format("MMMM Do, YYYY")} </p>
            <p> Status: {lesson.status} </p>
            <button id="accept" onClick={handleAccept}> Accept </button>
            <button id="reject" onClick={handleReject}> Reject </button>
            <br></br>
      </div>
    </div>
  )
}

export default Lesson
