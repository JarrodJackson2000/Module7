import React, { useState } from "react";
import "./BigCats.css";
import SingleCats from "./SingleCats";
import AddCatForm from "./AddCatForm";
import "./BigCats.css"; // Import the CSS file for styling

const addImageUrls = (cats) => {
  const imageUrls = {
    Cheetah:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wmHKHAwcv8Z_2ag5ieE-W2qrh_KC_y6KAg&s",
    Cougar:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg",
    Jaguar:
      "https://cdn.britannica.com/09/143609-050-826EA62F/Jaguar-stream-Brazil.jpg",
    Leopard:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/800px-African_leopard_male_%28cropped%29.jpg",
    Lion: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    "Snow leopard":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG",
    Tiger:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
  };
  return cats.map((cat) => ({
    ...cat,
    imageUrl: imageUrls[cat.name],
  }));
};

const initialCats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus", id: 1 },
  { name: "Cougar", latinName: "Puma concolor", id: 2 },
  { name: "Jaguar", latinName: "Panthera onca", id: 3 },
  { name: "Leopard", latinName: "Panthera pardus", id: 4 },
  { name: "Lion", latinName: "Panthera leo", id: 5 },
  { name: "Snow leopard", latinName: "Panthera uncia", id: 6 },
  { name: "Tiger", latinName: "Panthera tigris", id: 7 },
];

const originalCats = addImageUrls(initialCats);

function BigCats() {
  const [cats, setCats] = useState(addImageUrls(initialCats));

  const removeCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  function sortAlphabetically() {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  }

  function reverseOrder() {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  }

  function sortPanthera() {
    const pantheraCats = [...cats].filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setCats(pantheraCats);
  }

  function resetList() {
    setCats(originalCats);
  }

  return (
    <>
      <AddCatForm stateProp={setCats}></AddCatForm>
      <div>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseOrder}>Reverse Order</button>
        <button onClick={sortPanthera}>Sort by Panthera Species</button>
        <button onClick={resetList}>Reset</button>
      </div>
      <div className="BigCats componentBox">
        <ul>
          {cats.map((cat) => (
            <SingleCats
              key={cat.id}
              id={cat.id}
              prop1={cat.name}
              prop2={cat.latinName}
              imageUrl={cat.imageUrl}
              removeCat={removeCat}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default BigCats;
