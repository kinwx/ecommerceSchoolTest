import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./routes/layout";
import { Home } from "./routes/home";
import { Products } from "./routes/products";
import { Wishlist } from "./routes/wishlist";
import { Bag } from "./routes/bag";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Finished } from "./routes/finished";
import { AllProducts } from "./routes/allProducts";
import { NotFound } from "./routes/notFound";

export const DataContext = createContext(null);
function App() {
  const [ values, setValues ] = useState([]);
  const [ bag, setBag ] = useState([]);
  const [ wishlist, setWishlist ] = useState([]);
  const [ currentRoute, setCurrentRoute ] = useState('Home');

  useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            const dtaWithFrontValues = data.map( item => {
              item.wish = false;
              item.count = 0;
              const feedback = Math.random() * 10;
              item.feedback = feedback < 1 ? feedback.toFixed(1) : feedback.toFixed(2); 
              item.storage = ~~(Math.random() * 100);

              return item;
            });

            setValues([...dtaWithFrontValues]);
        } catch (error) {
            console.error(error.message);
        };
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{
      values,
      setValues,
      bag,
      setBag,
      wishlist,
      setWishlist,
      currentRoute,
      setCurrentRoute
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="bag" element={<Bag />} />
            <Route path="finished" element={<Finished />} />
            <Route path="products/all" element={<AllProducts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
};

export default App;
