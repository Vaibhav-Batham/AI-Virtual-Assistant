import { Routes, Route, Navigate } from "react-router-dom"; 
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Customize from "./pages/Customize";
import Home from "./pages/Home";
import { useContext } from "react";
import { userDataContext } from "./context/userContext";
import Customize2 from "./pages/customize2";

function App() {
  const { userData } = useContext(userDataContext);

  return (
    <Routes>
      {/* Home route */}
      <Route
        path='/'
        element={
          userData?.assistantImage && userData.assistantName
            ? <Home />
            : <Navigate to="/customize" replace />
        }
      />

      {/* SignUp route */}
      <Route
        path="/signup"
        element={
          userData
            ? <Navigate to="/customize" replace />
            : <SignUp />
        }
      />

      {/* SignIn route */}
      <Route
        path="/signin"
        element={
          userData
            ? <Navigate to="/customize" replace />
            : <SignIn />
        }
      />

      {/* Customize route */}
      <Route
        path="/customize"
        element={<Customize />}
      />

      {/* Customize2 route */}
      <Route
        path="/customize2"
        element={<Customize2 />}
      />
    </Routes>
  )
}

export default App;
