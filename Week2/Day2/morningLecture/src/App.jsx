import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./views/Home"
import About from "./views/About"
import Contact from "./views/Contact"
import Hello from "./views/Hello"
import Welcome from "./views/Welcome"
import Form from "./views/Form"
import Error from "./views/Error"

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>This is App component</h1>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/hello/:username" element={<Hello/>}/>
          <Route path="/welcome/:firstName/:lastName" element={<Welcome/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
