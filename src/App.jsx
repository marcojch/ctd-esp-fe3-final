import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import GlobalContext from './Components/utils/global.context'

function App() {

  return (
    <GlobalContext>
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
    </GlobalContext>
  )
}
export default App