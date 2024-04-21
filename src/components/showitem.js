import React, { useState } from "react";
import "../showitem.css";

function Showitem({ product, AddCart }) {
  let [productCount, setProductCount] = useState(1);

  const addItem = () => {
    AddCart({ ...product, count: productCount });
    productCount++
    setProductCount(productCount)
  };
  const removeItem = () => {
    AddCart({ ...product, count: productCount });
    productCount--
    setProductCount(productCount)

  }

  return (
    <div>
      <img className="img" src={product.img} alt="#" />
      <div className="about-items">
        <li>{product.name}</li>
        <li>{product.price} $</li>
      </div>
      <button className="add-btn" onClick={() => addItem()}>
        +
      </button>
      <button className="add-btn" onClick={() => removeItem()}>-</button>
    </div>
  );
}

export default Showitem;
