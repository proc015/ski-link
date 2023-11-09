import { useEffect } from "react";
import LessonList from "../components/LessonList";
import { getLessons } from "../apiService";
import { useState } from "react";
import NavBar from "../components/NavBar";

const Instructor = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons().then((data) => {
      setLessons(data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      
      <LessonList lessons={lessons} setLessons={setLessons} />
    </div>
  );
};

export default Instructor;
