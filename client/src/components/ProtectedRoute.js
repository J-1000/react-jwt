import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Route, Routes } from "react-router-dom";

function ProtectedRoute(props) {
  if (!props.user) {
    return <Navigate to="/" /> // Navigate is the new Redirect
  }
  return (
    <Routes>
      <Route {...props} />
    </Routes>
  )
}
export default ProtectedRoute;