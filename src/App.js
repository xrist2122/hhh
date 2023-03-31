import { useState } from 'react';
import Cart from './Components/Main/Card/Cart';
import Header from './Components/Header/Header';
import './App.css'
import Slider from './Components/Main/Slider';
import AllCard from './Components/Main/Card/AllCard';


function App() {


const [openCart, SetOpenCart] = useState(false);

    return <div>
      <Cart openCart={openCart} onOpenCart = {()=>SetOpenCart(false)}/>
      <Header onOpenCart = {() => SetOpenCart(true)} />
      <Slider />
      <AllCard />
    </div>
  }

export default App