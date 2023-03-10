import {Route, Routes} from 'react-router-dom';
import { Navigation } from './navigation/NavBar';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={ <ProductPage />}/>
        <Route path='/about' element={ <AboutPage />}/>
      </Routes>
    </>
  )
}

export default App;