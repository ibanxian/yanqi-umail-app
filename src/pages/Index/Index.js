import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import "./index.css"
import Home from "../Home/Home"
import Fenlei from "../Fenlei/Fenlei"
import Mine from "../Mine/Mine"
import Car from "../Car/Car"
export default class Index extends Component {
    render() {
        return (
            <div className="index">
                {/* 二级路由出口预留位置 */}
                <Switch>
                    <Route path="/Index/Home" component={Home}></Route>
                    <Route path="/Index/FenLei" component={Fenlei}></Route>
                    <Route path="/Index/Mine" component={Mine}></Route>
                    <Route path="/Index/Car" component={Car}></Route>
                    <Redirect to="/Index/Home"></Redirect>
                </Switch>

                <footer>
                    <NavLink to="/Index/Home" activeClassName="select">
                        <span className="bg1"></span>
                        <p> 首页</p>
                    </NavLink>
                    <NavLink to="/Index/FenLei" activeClassName="select">
                        <span className="bg2"></span>
                        <p>分类</p>
                    </NavLink>
                    <NavLink to="/Index/Car" activeClassName="select">
                        <span className="bg3"></span>
                        <p> 购物车</p>
                    </NavLink>
                    <NavLink to="/Index/Mine" activeClassName="select">
                        <span className="bg4"></span>
                        <p> 我的</p>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
