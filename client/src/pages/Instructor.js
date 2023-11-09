import { useEffect } from "react";
import LessonList from "../components/LessonList";
import { getLessons } from "../apiService";
import { useState } from "react";
import NavBar from "../components/NavBar";
import sortLessons from "../utils/sortLessons";

const Instructor = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons().then((data) => {
      setLessons(sortLessons(data));
    });
  }, []);

  return (
    <div className="Instructor">
      <NavBar />

      <LessonList lessons={lessons} setLessons={setLessons} />
    </div>
  );
};

export default Instructor;
