//import Header from "./components/header";
//import Card from "./components/card";
import Todocontainer from "./components/todocontainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Sigup";
import Landing from "./pages/Landing";

function App() {

  const [users, setUsers] = useState(
    [
      {
        UserName: "safii",
        Password: "12345"
      }
    ]
  )

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/Signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
          <Route path='/Landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
