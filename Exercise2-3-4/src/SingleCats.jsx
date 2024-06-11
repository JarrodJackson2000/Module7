function SingleCats(props) {
  const removeCat = () => {
    props.removeCat(props.id);
  };

  return (
    <li>
      {props.prop1}
      <span> {props.prop2}</span>
      {props.imageUrl && (
        <img
          style={{ width: "200px", height: "200px" }}
          src={props.imageUrl}
          alt={props.prop1}
        />
      )}
      <button onClick={removeCat}>Remove</button>
    </li>
  );
}

export default SingleCats;
