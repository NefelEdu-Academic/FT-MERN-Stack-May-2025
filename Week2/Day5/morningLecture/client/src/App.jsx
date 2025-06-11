import {BrowserRouter, Routes, Route} from "react-router-dom"
// import './App.css'
import DisplayAll from "./components/DisplayAll"
import CreateMovie from "./components/CreateMovie"
import UpdateMovie from "./components/UpdateMovie"
import ShowById from "./components/ShowById"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayAll/>} />
        <Route path="/new" element={<CreateMovie/>} />
        <Route path="/update/:id" element={<UpdateMovie/>} />
        <Route path="/show/:id" element={<ShowById/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
