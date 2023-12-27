import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/Css/global.css"
import PrivateRout from "./utils/PrivateRout";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import Login from "./Components/AuthFormComp/Login";
import SignUp from './Components/AuthFormComp/SignUp'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SignUp/>} path="authorisation/signup" />
          <Route element={<Login />} path="authorisation/login/" />
          <Route element={<PrivateRout />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
