import React from "react";
import { useSelector } from "react-redux";
import Create from "./Create";
import Signin from "./Signin";

const Login = () => {
  const hasAnAccount = useSelector((state: any) => state.ui.hasAnAccount);

  return <>{hasAnAccount ? <Signin /> : <Create />}</>;
};

export default Login;
