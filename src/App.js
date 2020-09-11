import React from 'react';
import asyncComponent from './util/asyncCompontents';
import { Switch, Route, Redirect } from "react-router-dom"
import MyRoute from './pages/MyRouter/MyRouter';
const Login = asyncComponent(() => import("./pages/Login/Login"))
const Register = asyncComponent(() => import("./pages/Register/Register"))
const Index = asyncComponent(() => import("./pages/Index/Index"))
const ClassGoods = asyncComponent(() => import("./pages/ClassGoods/ClassGoods"))
const Car = asyncComponent(() => import("./pages/Car/Car"))
const ShopDetail = asyncComponent(() => import("./pages/ShopDetail/ShopDetail"))

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login}></Route>
        <MyRoute path="/Index" component={Index}></MyRoute>
        <Route path="/Register" component={Register}></Route>
        <MyRoute path="/ClassGoods/:id" component={ClassGoods}></MyRoute>
        <MyRoute path="/Car" component={Car}></MyRoute>
        <MyRoute path="/ShopDetail/:id" component={ShopDetail}></MyRoute>
        <Redirect to="/Login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
