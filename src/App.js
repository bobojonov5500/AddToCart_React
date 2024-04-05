import { useState } from "react";
import "./App.css";
import Addeditem from "./components/addeditem";
import Showitem from "./components/showitem";
import burger from "./imgs/food1.jpg";
import kfc from "./imgs/kfc.jpg";
import sushi from "./imgs/sushi.jpg";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([
    { id: uuidv4(), name: "burger", price: 15.55, img: burger },
    { id: uuidv4(), name: "sushi", price: 18.45, img: sushi },
    { id: uuidv4(), name: "kfc", price: 51.54, img: kfc },
  ]);

  const [newData, setNewData] = useState([]);

  const AddCart = (item) => {
    setNewData([...newData, item]);
  };
  console.log(newData);

  const Remove = (id) => {
    const filtered = newData.filter((e, index) => {
      return id !== index;
    });
    setNewData(filtered);
  };
  const itemscount = newData.length;

  let sum = 0;
  newData.forEach((e) => {
    sum += e.price;
  });

  const RemoveAll = () => {
    setNewData([]);
  };

  return (
    <div className="App">
      <div className="cards-wrapper">
        <div className="left-card">
          {data.map((product, index) => (
            <ul className="card" key={index}>
              <Showitem product={product} AddCart={AddCart} />
            </ul>
          ))}
        </div>
        <div className="left-card">
          <h3>
            {itemscount === 0
              ? "You havn't any items yet"
              : `You have ${itemscount} items`}
          </h3>
          <span>Total: {sum.toFixed(2)}$</span>
          <button
            className={newData.length > 0 ? "show" : "hidden"}
            onClick={RemoveAll}
          >
            clean all
          </button>
          {newData.map((e, index) => (
            <ul className="card" key={index}>
              <Addeditem additem={e} index={index} remove={Remove} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
