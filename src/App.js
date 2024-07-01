import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddContact from "./components/add-contact";
import EditContact from "./components/edit-contact";
import Home from "./components/home";

function App() {
  return (
      <div className="app">
        <ToastContainer/>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/add" element={<AddContact/>}/>
                  <Route path="/edit/:id" element={<EditContact/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
