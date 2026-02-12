import { Routes, Route, Navigate } from "react-router-dom"; // Navigate import mat bhoolna
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Customize from "./pages/Customize";
import Home from "./pages/Home"; // Home import add karna
import { useContext } from "react";
import { userDataContext } from "./context/userContext";

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
            ? <Navigate to="/" replace />
            : <SignUp />
        }
      />

      {/* SignIn route */}
      <Route
        path="/signin"
        element={
          userData
            ? <Navigate to="/" replace />
            : <SignIn />
        }
      />

      <Route
        path="/customize"
        element={
          !userData
            ? <Customize />
            : <Navigate to="/signin" replace />
        }
      />
    </Routes>
  )
}

export default App;
