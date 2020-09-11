import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="loginTop">
                    <div>登录</div>
                    <div className="right">注册</div>
                </div>
                <div className="input_list">
                    <form>
                        <input type="text" placeholder="账号：" />
                        <input type="text" placeholder="密码：" />
                        <p>忘记密码</p>
                        <button>登录</button>
                    </form>
                </div>
            </div>
        )
    }
}
