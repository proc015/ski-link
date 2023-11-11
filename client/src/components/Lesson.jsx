import moment from "moment";
import { acceptLesson, rejectLesson } from "../apiService";
import sortLessons from "../utils/sortLessons";
import { useState } from "react";

const Lesson = ({ lesson, setLessons, isClientView }) => {
  const [isActionable, setisActionable] = useState(true);

  function handleAccept() {
    acceptLesson(lesson._id).then((updatedLesson) => {
      setLessons((prev) => {
        const filteredLessons = prev.filter((el) => el._id !== lesson._id);
        return sortLessons([...filteredLessons, updatedLesson]);
      });
      setisActionable(false);
    });
  }

  function handleReject() {
    rejectLesson(lesson._id).then((updatedLesson) => {
      setLessons((prev) => {
        const filteredLessons = prev.filter((el) => el._id !== lesson._id);
        return sortLessons([...filteredLessons, updatedLesson]);
      });
      setisActionable(false);
    });
  }

  return (
    <div className="Lesson">
      <div className="lesson-text-container">
        <p>
          {" "}
          <b>Name: </b> {lesson.name}{" "}
        </p>
        <p>
          {" "}
          <b> Resort: </b> {lesson.resort}{" "}
        </p>
        <p>
          {" "}
          <b> Lesson Type: </b> {lesson.level}{" "}
        </p>
        <p>
          {" "}
          <b> Date: </b> {moment(lesson.date).format("MMMM Do, YYYY")}{" "}
        </p>
        <p>
          {" "}
          <b> Status: </b> {lesson.status}{" "}
        </p>

        {!isClientView && isActionable && (
          <>
            <button id="accept" onClick={handleAccept}>
              {" "}
              Accept{" "}
            </button>
            <button id="reject" onClick={handleReject}>
              {" "}
              Reject{" "}
            </button>
          </>
        )}
        <br></br>
      </div>
    </div>
  );
};

export default Lesson;
