import Lesson from "./Lesson";

interface lessonsClientview {
  lessons:
  setLessons: 
  isClientView: 
}

const LessonList = ({ lessons, setLessons, isClientView }) => {
  return (
    <div className="lesson-list">
      {lessons.length ? (
        lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson._id}
              lesson={lesson}
              setLessons={setLessons}
              isClientView={isClientView}
            />
          );
        })
      ) : (
        <p> There are no lessons at this time </p>
      )}
    </div>
  );
};

export default LessonList;
