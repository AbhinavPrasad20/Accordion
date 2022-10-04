import React, { useEffect, useState } from "react";
import Data from "./Data";
import "./App.css"

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [showData, setshowData] = useState([]);

  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setshowData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightblue",
          lineHeight: "100px",
        }}
      >
        Accordian
      </h1>
      <div className="row">
        {showData.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <Data {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
