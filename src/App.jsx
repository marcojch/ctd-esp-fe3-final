
import './index.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'




function App() {

  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </>
  )
}
export default App;