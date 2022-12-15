import React, { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  return (
    <>
      <div>
        <button onClick={getApi} className="bg-teal-700 text-white rounded-xl px-2 py-2">CLICK <br /></button>
        <br />
        <div className="">
          <ul className="">
            {data.map((item) => (
              <div className="">
                <li className=" text-cyan-500">R{item.id}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Fetch;
