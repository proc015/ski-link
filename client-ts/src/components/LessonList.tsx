import Lessons from "./Lessons";
import { Lesson } from "../types";

interface lessonsClientview {
  lessons: Lesson[],
  setLessons: React.Dispatch<React.SetStateAction<Lesson[]>>,
  isClientView: boolean
}

const LessonList: React.FC<lessonsClientview> = ({ lessons, setLessons, isClientView }) => {
  return (
    <div className="lesson-list">
      {lessons.length ? (
        lessons.map((lesson) => {
          return (
            <Lessons
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