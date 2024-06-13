import React from "react";
import "./BigCats.css";

function SingleCats(props) {
  const removeCat = () => {
    props.removeCat(props.id);
  };

  return (
    <div className="card-container">
      {" "}
      {/* Add a CSS class to the parent container */}
      <div className="card">
        <div className="card-image">
          {props.imageUrl && (
            <img
              style={{ width: "200px", height: "200px" }}
              src={props.imageUrl}
              alt={props.prop1}
            />
          )}
        </div>
        <div className="card-content">
          <p>{props.prop1}</p>
          <span>{props.prop2}</span>
        </div>
        <div className="card-actions">
          <button onClick={removeCat}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default SingleCats;
