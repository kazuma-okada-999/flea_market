import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { AllItems } from "./components/AllItems.jsx";
import { SingleItem } from "./components/SingleItem.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Seller } from "./components/Seller.jsx";

function App() {
  const [currentView, setCurrentView] = useState("AllItems");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [refresh, setRefresh] = useState(true);

  function handleClick(item) {
    setSelectedItem(item);
    setCurrentView(SingleItem);
  }

  useEffect(() => {
    console.log("HIIiidididi!!!!");
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <BrowserRouter>
        <h1>DIG フリーマーケット</h1>
        <Navbar moveHome={setCurrentView} refresh={setRefresh} />
        <Routes>
          <Route path="/" element={<AllItems items={items} handleClick={handleClick} />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
