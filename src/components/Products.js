import React, { useState, useEffect } from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

function Products() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className="font-serif">
      <ul className=" card">
        {data.map((item) => (
          <div className=" mx-0 space-x-2 my-3 ">
            <li className="text-2xl  ">{item.title.substring(0, 20)}</li>

            <div className="flex">
              <li>
                <img src={item.image} className="rounded h-28 w-32" />
              </li>
              <div className="grid px-2">
                <li className=" text-red-600 py-2 ">Rs. {item.price}</li>
                <li className="">{item.description.substring(0, 80)}</li>
              </div>
            </div>

            <div className="buttons flex space-x-2  mx-20 my-3">
              <button className="btn">Buy</button>
              <button className=" btn">
                <ShoppingCartTwoToneIcon />
                Wishlist
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Products;
