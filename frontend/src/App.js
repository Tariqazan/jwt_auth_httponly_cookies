import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "./redux/slices/auth/refreshToken/Service";
import { verifyToken } from "./redux/slices/auth/verifyToken/Service";

function App() {
  const dispatch = useDispatch();
  const tokenInfo = useSelector((state) => state.tokenInfo)

  useEffect(() => {
    dispatch(verifyToken())
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(refreshToken(tokenInfo.data.refresh))
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [tokenInfo]);

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
