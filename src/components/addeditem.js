import React from "react";

function Addeditem({ additem, index, remove }) {
  const Delete = (id) => {
    remove(id);
  };
  return (
    <div>
      <img className="img" src={additem.img} alt="#" />
      <div className="about-items">
        <span className="notification">{additem.count}</span>
        <li>{additem.name}</li>
        <li>{additem.price.toFixed(2)} $</li>
      </div>
      <button className="add-btn" onClick={() => Delete(index)}>
        -
      </button>
    </div>
  );
}

export default Addeditem;
