import Lesson from "./Lesson";

const LessonList = ({ lessons, setLessons }) => {
  return (
    <div className="lesson-list">
      {lessons.length ? (
        lessons.map((lesson) => {
          return <Lesson lesson={lesson} setLessons={setLessons} />;
        })
      ) : (
        <p> There are no lessons at this time </p>
      )}
    </div>
  );
};

export default LessonList;
