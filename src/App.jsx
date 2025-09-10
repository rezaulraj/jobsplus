import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import RootHome from "./pages/roothomepage/RootHome";
import EmployerLayout from "./layout/EmployerLayout";
import SeekerLayout from "./layout/SeekerLayout";

function App() {
  const user = {
    role: "seeker",
    isLoggedIn: true,
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<RootHome />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Seeker Protected Routes */}
        {user.isLoggedIn && user.role === "seeker" && (
          <Route path="/seeker" element={<SeekerLayout />}>
            <Route index element={<RootHome />} />
            {/* you can add more seeker-only pages here */}
          </Route>
        )}

        {/* Employer Protected Routes */}
        {user.isLoggedIn && user.role === "employer" && (
          <Route path="/employer" element={<EmployerLayout />}>
            <Route index element={<RootHome />} />
            {/* add employer-only pages */}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
