import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="homeTop">
                    <div className="logo"></div>
                </div>
                <div className="homeNav">
                    <div className="active"><i className="homeNav_1"></i>首页</div>
                    <div><i className="homeNav_2"></i>分类</div>
                    <div><i className="homeNav_3"></i>购物车</div>
                    <div><i className="homeNav_4"></i>我的</div>
                </div>
            </div>
        )
    }
}
