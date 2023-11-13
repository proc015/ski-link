import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postReviews } from "../apiService";

const AddReview = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] =useState("");

  const reviewObj = {
    name,
    score,
    comment,
  };

  function handleSubmit(e) {
    e.preventDefault();

    postReviews(reviewObj).then((newReview) => {
      setReviews((prev) => [...prev, newReview]);
      setName("");
      setScore("");
      setComment("");
      toast.success("Review submitted!", {
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

  return (
    <>
      <ToastContainer />

      <form onSubmit={handleSubmit} className="rating-form-container">
        <div className="rating-form-control">
          <label>
            Name:
            <input
              type="text"
              required={true}
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div className="rating-form-control">
          <label>
            Score:
            <input
              type="text"
              required={true}
              placeholder=""
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </label>
        </div>

        <div className="rating-form-control">
          <label>
            Comments:
            <input
              type="text"
              required={true}
              placeholder=""
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />

      </form>
    </>
  );
};

export default AddReview;
