import { useEffect } from "react";
import LessonList from "../components/LessonList";
import { getClientLessons } from "../apiService";
import { useState } from "react";
import NavBar from "../components/NavBar";

const Client = () => {
  const [lessons, setLessons] = useState([]);

  const userName = "john"; //harcoded userName will change later

  useEffect(() => {
    getClientLessons(userName).then((data) => {
      setLessons(data);
    });
  }, [userName]);

  return (
    <div className="Client">
      <NavBar />

      <div className="client-dashboard-container">
        <div className="client-header">
          <h5>Client Dashboard</h5>
        </div>

        <LessonList
          lessons={lessons}
          setLessons={setLessons}
          isClientView={true}
        />
      </div>
    </div>
  );
};

export default Client;