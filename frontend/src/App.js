import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyToken } from "./redux/slices/auth/verifyToken/Service";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyToken())
  })
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
