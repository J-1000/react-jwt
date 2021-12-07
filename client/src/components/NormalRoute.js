import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Route, Routes } from "react-router-dom";

function NormalRoute(props) {
  return (
    <Routes>
      <Route {...props} />
    </Routes>
  )
}

export default NormalRoute;