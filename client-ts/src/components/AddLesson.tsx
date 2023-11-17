import { useState } from "react";
import { getWeather, postLessons } from "../apiService";
import WeatherDisplay from "./WeatherDisplay";
import { ToastContainer, toast } from "react-toastify";
import { Lesson } from "../types";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
  inputValues: Lesson;
}

const AddLesson = () => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    name: '',
    resort: '',
    level: '',
    date: '',
    lessons: [],
    weather: []
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { // solo podrá recibir cosas de HTMLInputElement y HTMLTextAreaElement (input normal o text area input)
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value //e.target.name coge el name del input

    })
    console.log(inputValues);

  }






  const handleResortChange = async (selectedResort: string) => {
    setInputValues({
      ...inputValues,
      resort: selectedResort
    });
    if (selectedResort) {
      try {
        console.log(inputValues)
        const weatherData = await getWeather(selectedResort);
        setInputValues({
          ...inputValues,
          weather: weatherData.list
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const lessonObj = {
      ...inputValues
    }

    postLessons(lessonObj).then((newLesson) => {
      console.log(newLesson)
      setLessons((prev) => [...prev, newLesson]);
      setInputValues({
        ...inputValues,
        name: '',
        resort: '',
        level: '',
        date: '',
        lessons: [],
        weather: []
      });
      toast.success("Lesson request successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }

  {/*  */ }



  return (
    <>
      <h1>dsadasd</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="lesson-booking-form-container">
        <div className="form-elements">
          <div className="form-control">
            <label>
              Name:
              <input
                type="text"
                required={true}
                placeholder="Insert name here..."
                value={inputValues.name}
                onChange={handleChange}
                name="name"
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              Select a resort:
              <select
                value={inputValues.resort}
                name="resort"
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
              <select value={inputValues.lessons} onChange={handleChange} name="lessons">
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
                value={inputValues.date}
                onChange={handleChange}
                name="date"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {/* <WeatherDisplay weather={weather} /> */}
    </>
  );
};

export default AddLesson;
