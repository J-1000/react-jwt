import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NormalRoute from "./components/NormalRoute";    // <== IMPORT
import ProtectedRoute from "./components/ProtectedRoute";    // <== IMPORT
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./context/auth.context";  // <== IMPORT

function App(props) {

  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <NormalRoute path="/" element={HomePage} />
        <ProtectedRoute path="/projects" user={user} element={<ProjectListPage />} />
        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        {/* <PrivateRoute path="/projects" component={ProjectListPage} />
        <PrivateRoute path="/projects/:id" component={ProjectDetailsPage} />
        <PrivateRoute path="/projects/edit/:id" component={EditProjectPage} /> */}

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  );
}

export default App;
