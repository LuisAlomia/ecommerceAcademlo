import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const ProtectedRoutes = () => {
  const token = useSelector((state) => state.login);

  if (token) {
    return <Outlet />;
  } else {
    return <Login />;
  }
};

export default ProtectedRoutes;
