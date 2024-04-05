import React from "react";

function Addeditem({ additem, index, remove }) {
  const Delete = (id) => {
    remove(id);
  };
  return (
    <div>
      <img className="img" src={additem.img} alt="#" />
      <div className="about-items">
        <span className="notification">1</span>
        <li>{additem.name}</li>
        <li>{additem.price} $</li>
      </div>
      <button className="add-btn" onClick={() => Delete(index)}>
        -
      </button>
    </div>
  );
}

export default Addeditem;
