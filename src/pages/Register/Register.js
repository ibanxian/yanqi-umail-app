import React, { Component } from 'react'
import "./register.css"
import Header from "../../components/header/header"
import { reqRegister } from "../../util/request"
import { Toast } from 'antd-mobile';
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
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
    //点击注册的时候发起请求
    reg() {
        reqRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                this.props.history.push("/login")
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
                <Header title="注册" back></Header>
                <div className="input_list">
                    <form>
                        <input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} placeholder="手机号：" />
                        <input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, "nickname")} placeholder="账号：" />
                        <input type="text" value={user.password} onChange={(e) => this.changeUser(e, "password")} placeholder="密码：" />
                        <button onClick={() => this.reg()}>注册</button>
                    </form>
                </div>
            </div>
        )
    }
}
