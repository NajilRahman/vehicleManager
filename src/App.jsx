
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Landiing from './page/Landiing';
import { Routes,Route } from 'react-router-dom'
import Garage from './page/Garage';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landiing/>}/>
        <Route path='/garage' element={<Garage/>}/>

        <Route path='*' element={<h1>Page Not Found 404</h1>}/>

      </Routes>
<Footer/>
    </>
  )
}

export default App
