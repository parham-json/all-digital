import { useState } from 'react'
import { Route , Router, Routes } from "react-router-dom";
import './App.css'
import Footer from './footer';
import Header from './header'
import Contact from './pages/تماس با ما/Contact'
import Latest from './pages/جدیدترین ها/Latest'
import Search from './pages/جستجو پیشرفته/Search'
import Support from './pages/پشتیبانی/Support'
import About from './pages/درباره/About'
import Home from './pages/خانه/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header></Header>

<Routes>
<Route path='/Search' element={<Search></Search>}></Route>
<Route path='/Support' element={<Support></Support>}></Route>
<Route path='/About' element={<About></About>}></Route>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/Latest' element={<Latest></Latest>}></Route>
<Route path='/Contact' element={<Contact></Contact>}></Route>
</Routes>













<Footer></Footer>














    </>
  )
}

export default App
