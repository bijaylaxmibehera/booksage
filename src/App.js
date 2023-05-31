import "./App.css";
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages/Home/Home";
import { Header } from "./component/Header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
     <Route path="/mockman" element={<Mockman />} />
     <Route path="/" element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
