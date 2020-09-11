import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//1.引入 rem.js resect.js
//2.引入reset rem 
import "./assets/js/rem"
import "./assets/css/reset.css"
//3.引入UI框架
import 'antd-mobile/dist/antd-mobile.css';
// 引入hash路由模式
import { HashRouter, } from "react-router-dom"
ReactDOM.render(
   <HashRouter>
      <App />
   </HashRouter>,
   document.getElementById('root')
);

