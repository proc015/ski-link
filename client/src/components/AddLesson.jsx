import { useState } from "react";
import { getWeather, postLessons } from "../apiService";
import WeatherDisplay from "./WeatherDisplay";

const AddLesson = () => {
  const [name, setName] = useState("");
  const [resort, setResort] = useState("");
  const [level, setLevel] = useState("");
  const [date, setDate] = useState("");
  const [lessons, setLessons] = useState([]);
  const [weather, setWeather] = useState([]);

  const lessonObj = {
    name,
    resort,
    level,
    date,
  };

  const handleResortChange = async (selectedResort) => {
    setResort(selectedResort);
    if (selectedResort) {
      try {
        const weatherData = await getWeather(selectedResort);
        setWeather(weatherData.list);
      } catch (err) {
        console.log(err);
      }
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert('Successfully requested ski lesson!');

    postLessons(lessonObj).then((newLesson) => {
      setLessons((prev) => [...prev, newLesson]);
      setName("");
      setResort("");
      setLevel("");
      setDate("");
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="lesson-booking-form-container">
        <div className="form-elements">
          <div className="form-control">
            <label>
              
              Name:
              <input
                type="text"
                required={true}
                placeholder="Insert name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-control">
            <label>
          
              Select a resort:
              <select
                value={resort}
                onChange={(e) => handleResortChange(e.target.value)}
              >
                <option> </option>
                <option value="Arapahoe">Arapahoe</option>
                <option value="Aspen">Aspen</option>
                <option value="Breckenridge">Breckenridge</option>
                <option value="Keystone">Keystone</option>
                <option value="Vail">Vail</option>
              </select>
            </label>
          </div>

          <div className="form-control">

            <label>
              
              Lesson type:
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option> </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          
            </div>

            <div className="form-control">

            <label>
              
              Date:
              <input
                type="date"
                required={true}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <WeatherDisplay weather={weather} />
    </>
  );
};

export default AddLesson;
