import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="loginTop">
                    <div className="left">返回</div>
                    <div>注册</div>
                </div>
                <div className="input_list">
                    <form>
                        <input type="text" placeholder="手机号：" />
                        <input type="text" placeholder="账号：" />
                        <input type="text" placeholder="密码：" />
                        <button>注册</button>
                    </form>
                </div>
            </div>
        )
    }
}
