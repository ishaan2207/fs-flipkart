import './App.css';
import ItemsNav from './ItemsNav';
import Electronics from './Electronics';
import Carousel from './Carousel/Carousel';
import ParentWidget from './ParentWidget/ParentWidget';
import Heading from './Heading';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Heading />
        <ParentWidget />
      </UserProvider>
      <ItemsNav />
      <Carousel />
    </>
  )
}

export default App;
