import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerServices } from "../services/userServices";
import style from "./styles/login.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "admin",
  });

  const submit = (e) => {
    e.preventDefault();
    registerServices(register).then((resp) => navigate("/"));
  };

  const onchangeRegister = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleLogin = () => navigate("/login");

  return (
    <div className={style.content}>
      <div className={style.container}>
        <h3 className={style.title}>Sign Up</h3>
        <form onSubmit={submit} className={style.form}>
          <label className={style.formLabel} htmlFor="email">
            Email
          </label>
          <input
            className={style.formInput}
            id="email"
            type="text"
            name="email"
            onChange={onchangeRegister}
          />
          <label className={style.formLabel} htmlFor="firstName">
            First Name
          </label>
          <input
            className={style.formInput}
            id="firstName"
            type="text"
            name="firstName"
            onChange={onchangeRegister}
          />
          <label className={style.formLabel} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={style.formInput}
            id="lastName"
            type="text"
            name="lastName"
            onChange={onchangeRegister}
          />
          <label className={style.formLabel} htmlFor="password">
            Password
          </label>
          <input
            className={style.formInput}
            id="password"
            type="text"
            name="password"
            onChange={onchangeRegister}
          />
          <label className={style.formLabel} htmlFor="phone">
            Phone &#40;10 characters&#41;
          </label>
          <input
            className={style.formInput}
            id="phone"
            type="text"
            name="phone"
            onChange={onchangeRegister}
          />
          <button className={style.button}>Login</button>
        </form>
        <p className={style.singUp}>
          Do not have an account?{" "}
          <span onClick={handleLogin} className={style.subTitle}>
            Sing up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
