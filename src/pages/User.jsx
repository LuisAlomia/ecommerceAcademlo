import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/slices/login.slice";
import userImg from "../assets/user.jpg";
import style from "./styles/user.module.css";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);

  const handleExit = () => {
    dispatch(setToken(""));
  };

  return (
    <div className={style.content}>
      <img src={userImg} alt="user image" />
      {user && (
        <h3 className={style.userName}>
          {user.firstName} {user.lastName}
        </h3>
      )}
      <h4 onClick={handleExit} className={style.exit}>
        log Out
      </h4>
    </div>
  );
};

export default User;
