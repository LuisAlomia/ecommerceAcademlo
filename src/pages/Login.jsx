import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginServices } from "../services/userServices";
import { setToken } from "../store/slices/login.slice";
import style from "./styles/login.module.css";
import User from "./User";

const initialStateLogin = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(initialStateLogin);
  const token = useSelector((state) => state.login.token);

  const changeInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    loginServices(login).then((resp) => {
      dispatch(setToken(resp));
      navigate("/");
    });
  };

  const handleRegister = () => navigate("/register");

  return (
    <div className={style.content}>
      {token ? (
        <User />
      ) : (
        <div className={style.container}>
          <h3 className={style.title}>
            Welcome! Enter your email and password to continue
          </h3>
          <p className={style.subTitle}>
            You have to Log in to access to your cart
          </p>
          <div className={style.contentTest}>
            <h4 className={style.testTitle}>Test data</h4>
            <p className={style.testText}>
              <span className="material-symbols-outlined">mail</span>{" "}
              mason@gmail.com
            </p>
            <p className={style.testText}>
              <span className="material-symbols-outlined">lock</span> mason1234
            </p>
          </div>
          <form onSubmit={submit} className={style.form}>
            <label className={style.formLabel} htmlFor="email">
              Email
            </label>
            <input
              className={style.formInput}
              id="email"
              type="text"
              name="email"
              onChange={changeInput}
            />
            <label className={style.formLabel} htmlFor="password">
              Password
            </label>
            <input
              className={style.formInput}
              id="password"
              type="password"
              name="password"
              onChange={changeInput}
            />
            <button className={style.button}>Login</button>
          </form>
          <p className={style.singUp}>
            Do not have an account?{" "}
            <span onClick={handleRegister} className={style.subTitle}>
              Sing up
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
