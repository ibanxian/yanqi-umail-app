import React, { Component } from 'react'
import "./login.css"
import { reqLogin } from "../../util/request"
import { Link } from 'react-router-dom'
import { Toast } from 'antd-mobile';
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    //修改state
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    //点击登录的时候发起请求
    login() {
        reqLogin(this.state.user).then(res => {
            if (res.data.code === 200) {
                sessionStorage.setItem("uid", res.data.list.uid)
                sessionStorage.setItem("token", res.data.list.token)
                this.props.history.push("/Index")
                Toast.success(res.data.msg, 1);
            } else {
                Toast.fail(res.data.msg, 1);
            }
        })
    }
    render() {
        const { user } = this.state
        return (
            <div>
                <div className="loginTop">
                    <div>登录</div>
                    <Link to="/Register" className="right">注册</Link>
                </div>
                <div className="input_list">
                    <input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} placeholder="账号：" />
                    <input type="text" value={user.password} onChange={(e) => this.changeUser(e, "password")} placeholder="密码：" />
                    <p>忘记密码</p>
                    <button onClick={() => this.login()}>登录</button>
                </div>
            </div>
        )
    }
}
