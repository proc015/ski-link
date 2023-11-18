import { useEffect } from "react";
import LessonList from "../components/LessonList";
import { getLessons } from "../apiService";
import { useState } from "react";
import NavBar from "../components/NavBar";
import sortLessons from "../utils/sortLessons";
import { Lesson } from "../types";

const Dashboard = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    getLessons().then((data) => {
      setLessons(sortLessons(data));
    });
  }, []);

  const isClientView = false;

  return (
    <div className="Dashboard">
      <NavBar />
      <div className="instructor-dashboard-container">
        <div className="instructor-header">
          <h5>Instructor Dashboard</h5>
        </div>

        <LessonList lessons={lessons} setLessons={setLessons} isClientView={isClientView} />
      </div>
    </div>
  );
};

export default Dashboard;