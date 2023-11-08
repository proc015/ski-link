import { useState } from "react";
import { postLessons } from "../apiService";

const AddLesson = ({ setLessons }) => {
  const [name, setName] = useState("");
  const [resort, setResort] = useState("");
  const [lesson, setLesson] = useState("");
  const [date, setDate] = useState("");

  const lessonObj = {
    name,
    resort,
    lesson,
    date,
  };

  function handleSubmit(e) {
    e.preventDefault();

    postLessons(lessonObj).then((newLesson) => {
      setLessons((prev) => [...prev, newLesson]);
      setName("");
      setResort("");
      setLesson("");
      setDate("");
    });
  }

  return (
    <form onSubmit={handleSubmit} className="lesson-booking-form-container">
      <div className="form-control">
        <label> NAME </label>
        <input
          type="text"
          required={true}
          placeholder="Insert name here..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Select a resort: 
        <select value={resort} onChange={(e) => setResort(e.target.value)}> 
          <option> </option>
          <option value="Arapahoe">Arapahoe</option> 
          <option value="Aspen">Aspen</option> 
          <option value="Breckenridge">Breckenridge</option> 
          <option value="Keystone">Keystone</option> 
          <option value="Vail">Vail</option> 
          </select>
          </label>
          <label> Lesson type: 
        <select value={lesson} onChange={(e) => setLesson(e.target.value)}> 
        <option> </option>
          <option value="Beginner">Beginner</option> 
          <option value="Intermediate">Intermediate</option> 
          <option value="Advanced">Advanced</option> 
          </select>
          </label>
        <label> DATE </label>
        <input
          type="date"
          required={true}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddLesson;
