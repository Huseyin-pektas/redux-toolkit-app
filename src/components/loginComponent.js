import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../redux/features/loginSlice';

const LoginComponent = () => {
  const renk = useSelector((state) => state.themeReducer.value);

  console.log(renk, " login componenti")
  const dispatch = useDispatch();

  const loginClick = () => {
    dispatch(loginAction({ name: "Hüseyin", surname: "PEKTAS" }));
  };
const logoutClick =()=>{
  dispatch(logoutAction())}

 

  return (
    <div style={{color:renk}} >
      <h1>LoginComponent.</h1>
      <button onClick={loginClick}>Login</button>
      <button onClick={logoutClick}>Logout</button>
    </div>
  );
};
export default LoginComponent;
