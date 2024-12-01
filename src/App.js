import './App.css';
import ItemsNav from './ItemsNav';
import Carousel from './Carousel/Carousel';
import ParentWidget from './ParentWidget/ParentWidget';
import Heading from './Heading/Heading';
import { ItemProvider } from './Context/ItemContext';
import Cart from './Cart/Cart';

function App() {
  return (
    <>
      <ItemProvider>
        <Heading />
        <Cart />
      </ItemProvider>
      <ParentWidget />
      <ItemsNav />
      <Carousel />
    </>
  )
}

export default App;
