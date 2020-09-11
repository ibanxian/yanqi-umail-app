import React from 'react';

// css，js文件
import "./assets/css/reset.css"
import "./assets/css/index.css"
import "./assets/js/rem.js"

// 页面
import Login from './page/login/Login'
import Register from './page/login/Register'
import Index from './page/index/Index'

function App() {
  return (
    // <Login></Login>
    // <Register></Register>
    <Index></Index>
  );
}

export default App;
