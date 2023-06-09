import { useState } from "react";
import "./App.css";
import Additem from "./Components/AddItem";
import SearchBar from "./Components/Searchbar";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    items["items"].push(item);
    setData({ items: items });
    console.log(data);
  };
  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <Additem Additem={addItemToData} />
    </div>
  );
}

export default App;
