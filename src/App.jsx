import { useState } from "react";
import Home from "./pages/Home";
import Fixed from "./pages/Fixed";
import Reports from "./pages/Reports";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddReport from "./pages/AddReport";
import Profile from "./pages/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/about";
import EditReport from "./pages/EditReport";
import Done from "./components/Done";
import { SectionProvider } from "./context/SectionContext";
import DonationPage from "./components/DonationPage";
import { Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";

const ProtectedRoute = () => {
  const { isLoggedIn, loading } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

function Layout({ isLoggedIn }) {
  const location = useLocation();

  const hideLayoutPaths = [
    "/add-report",
    "/profile",
    "/",
    "/register",
    "/edit-report",
  ];
  const hideLayout = hideLayoutPaths.includes(location.pathname);
  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && <Navbar />}
      <AuthProvider>
        <SectionProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute isAuth={isLoggedIn} />}>
              <Route path="/home" element={<Home />} />
              <Route path="/edit-report" element={<EditReport />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/donation" element={<DonationPage />} />

              <Route path="/fixed" element={<Done />} />
              <Route path="/about" element={<About />} />
              <Route path="/add-report" element={<AddReport />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </SectionProvider>
      </AuthProvider>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
