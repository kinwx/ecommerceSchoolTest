import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./routes/layout";
import { Home } from "./routes/home";
import { Products } from "./routes/products";
import { Wishlist } from "./routes/wishlist";
import { Bag } from "./routes/bag";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Finished } from "./routes/finished";

export const DataContext = createContext(null);
function App() {
  const [ values, setValues ] = useState([]);
  const [ bag, setBag ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            setValues(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{
      values,
      bag,
      setBag,
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="bag" element={<Bag />} />
            <Route path="finished" element={<Finished />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
};

export default App;
