import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { AllItems } from "./components/AllItems.jsx";
import { SingleItem } from "./components/SingleItem.jsx";
import { Navbar } from "./components/Navbar.jsx";

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
    console.log("HIIiidididi!!!!")
    fetch("http://localhost:8080/items")
      .then(res => res.json())
      .then(res => setItems(res))
      .catch(err => console.error(err))
  },[])

  return (
    <>
      <h1>DIG フリーマーケット</h1>
      <Navbar moveHome={setCurrentView} refresh={setRefresh} />
      {/* {currentView === "AllItems" ? (
        <AllItems items={items} handleClick={handleClick} />
      ) : (
        <SingleItem item={selectedItem} />
      )} */}
        <AllItems items={items} handleClick={handleClick} />
    </>
  );
}

export default App;
