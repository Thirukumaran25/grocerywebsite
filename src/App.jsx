import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Vegtablecat from './components/Vegtablecat'
import Cartpage from './components/Cartpage'
import Main1 from "./components/Main1"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Categories from './components/Categories'
import Bestsale from './components/Bestsale'
import Blogs from './components/Blogs'
import Register from './components/Register'
import Fruit from './components/Fruit'
import Diary from './components/Diary'
import Meat from './components/Meat'
import Bakery from './components/Bakery'
import Pantry from './components/Pantry'
import Snacks from './components/Snacks'
import Frozen from './components/Frozen'
import Privcay from './components/Privcay'
import Terms from './components/Terms'
import Howto from './components/Howto'
import About from './components/About'
import Newarrival from './components/Newarrival'
import Trending from './components/Trending'
import Bestselling from './components/Bestselling'
import Readmore from './components/Readmore'
import Eggdescrip from './components/Eggdescrip'
import Address from './components/Address'
import Snackdescrip from './components/Snackdescrip'
import Vegidescript from './components/Vegidescript'
import Pantrydescrip from './components/Pantrydescrip'
import Meatdescrip from './components/Meatdescrip'
import Fruitdescrip from './components/Fruitdescrip'
import Frozendescrip from './components/Frozendescrip'
import Backerdescrip from './components/Backerdescrip'
import Payment from './components/Payment'
import Successfull from './components/Successfull'




export const cartContext =createContext();

function App() {
  const [cart,setCart]=useState([]);
  const [finalamt, setFinalamt] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product does not exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(product => 
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => {
      return prevCart.map(product => {
        if (product.id === id) {
          if (product.quantity === 1) {
            return null; // Remove product if quantity is 1
          }
          return { ...product, quantity: product.quantity - 1 }; // Decrease quantity
        }
        return product;
      }).filter(Boolean); // Filter out null values
    });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
    <cartContext.Provider value={{cart,setCart,addToCart,increaseQuantity, decreaseQuantity}}>
     <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>

        <Routes>
            <Route path='/Main1' element={<Main1/>}/>
            <Route path='/' element={<Main1/>}>
              <Route index element={<Newarrival/>}/>
              <Route path="Newarrival" element={<Newarrival/>}/>
              <Route path='Trending' element={<Trending/>}/>
              <Route path='Bestselling' element={<Bestselling/>}/>
            </Route>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path='/Bestsale' element={<Bestsale/>}/>
            <Route path='/Blogs' element={<Blogs/>}/>
            <Route path='/Cartpage' element={<Cartpage finalamt={finalamt} setFinalamt={setFinalamt}/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Fruit' element={<Fruit/>}/>
            <Route path='/Vegtablecat' element={<Vegtablecat />}/>
            <Route path='/Diary' element={<Diary/>}/>
            <Route path='/Meat' element={<Meat/>}/>
            <Route path='/Bakery' element={<Bakery/>}/>
            <Route path='/Pantry' element={<Pantry/>}/>
            <Route path='/Snacks' element={<Snacks/>}/>
            <Route path='/Frozen' element={<Frozen/>}/>
            <Route path='/Privcay' element={<Privcay/>}/>
            <Route path='/Terms' element={<Terms/>}/>
            <Route path='/Howto' element={<Howto/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Readmore' element={<Readmore/>}/>
            <Route path='/Eggdescrip' element={<Eggdescrip/>}/>
            <Route path='/Address' element={<Address/>}/>
            <Route path='/Snackdescrip' element={<Snackdescrip/>}/>
            <Route path='/Vegidescript' element={<Vegidescript/>}/>
            <Route path='/Pantrydescrip' element={<Pantrydescrip/>}/>
            <Route path='/Meatdescrip' element={<Meatdescrip/>}/>
            <Route path='/Fruitdescrip' element={<Fruitdescrip/>}/>
            <Route path='/Frozendescrip' element={<Frozendescrip/>}/>
            <Route path='/Backerdescrip' element={<Backerdescrip/>}/>
            <Route path='/Payment' element={<Payment finalamt={finalamt}/>}/>
            <Route path='/Successfull' element={<Successfull/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </cartContext.Provider>
    </>
  )
}

export default App
