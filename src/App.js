import "./App.css";
import { HomeScreen, Login, SignUp ,Profile } from "./pages";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {



  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
    })

  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
