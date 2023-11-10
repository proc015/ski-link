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

      <div className="insturctor-header">
        <h5>Instructor Dashboard</h5>
      </div>
    
      <LessonList lessons={lessons} setLessons={setLessons} />
    </div>
  );
};

export default Instructor;
