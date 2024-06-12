"use client";

import { useState } from "react";

function AddCatForm({ stateProp }) {
  const [submitResult, setSubmitResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.firstName.value) {
      setSubmitResult("You must enter Name:");
    } else if (!e.target.latinName.value) {
      setSubmitResult("You must enter Latin Name:");
    } else if (!e.target.imageUrl.value) {
      setSubmitResult("You must enter Image Url:");
    } else {
      setSubmitResult("Submitted successfuly");
      stateProp((originalCats) => [
        ...originalCats,
        {
          name: e.target.firstName.value,
          latinName: e.target.latinName.value,
          imageUrl: e.target.imageUrl.value,
          id: originalCats.length + 1,
        },
      ]);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="firstName" id="firstName"></input>
        </div>
        <div>
          <label>Latin Name: </label>
          <input type="text" name="latinName" id="latinName"></input>
        </div>
        <div>
          <label>Image URL: </label>
          <input type="text" name="imageUrl" id="imageUrl"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
        <div>{submitResult}</div>
      </form>
    </>
  );
}

export default AddCatForm;
