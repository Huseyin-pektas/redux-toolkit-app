import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../redux/features/loginSlice';

const LoginComponent = () => {
  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const loginClick = () => {
    dispatch(loginAction({ name: "Hüseyin", surname: "PEKTAS" }));
  };
const logoutClick =()=>{
  dispatch(logoutAction())}

 

  return (
    <div>
      <h1>Burası login componentidir.</h1>
      <button onClick={loginClick}>Login</button>
      <button onClick={logoutClick}>Logout</button>
    </div>
  );
};
export default LoginComponent;
