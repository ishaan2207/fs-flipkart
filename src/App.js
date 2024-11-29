import './App.css';
import ItemsNav from './ItemsNav';
import Electronics from './Electronics';
import Carousel from './Carousel/Carousel';
import ParentWidget from './ParentWidget/ParentWidget';

function App() {
  return (
    <>
      <ItemsNav />
      <ParentWidget />
      <Carousel />
    </>
  )
}

export default App;
