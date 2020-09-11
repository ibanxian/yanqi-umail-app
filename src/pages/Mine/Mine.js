import React, { Component } from 'react'
import "./mine.css"
import aa from "../../assets/img/set.png"
import bb from "../../assets/img/news.png"
import peo from "../../assets/img/1.jpg"
import keep from "../../assets/img/keep.png"
import mon from "../../assets/img/icon_refund.png"

export default class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <nav>
                    <img src={aa} alt="" className="img1"/>
                    个人中心
                    <img src={bb} alt="" className="img2"/>
                    <img src={peo} alt="" className="peo"/>
                </nav>
                <div className="like">
                    <p className="name">name</p>
                    <p>
                        <img src={keep} alt="" className="keep"/>
                        我的收藏 ( 5 )
                    </p>
                </div>
                <div className="order">
                    我的订单
                    <span>查看订单</span>
                </div>
                <div className="list">
                   <div>
                       <img src={mon} alt="" className="mon"/>
                       <p>待发货</p>
                   </div>
                   <div>
                       <img src={mon} alt="" className="mon"/>
                       <p>待发货</p>
                   </div>
                   <div>
                       <img src={mon} alt="" className="mon"/>
                       <p>待发货</p>
                   </div>
                   <div>
                       <img src={mon} alt="" className="mon"/>
                       <p>待发货</p>
                   </div>
                   <div>
                       <img src={mon} alt="" className="mon"/>
                       <p>待发货</p>
                   </div>
                </div>
                
                
                
                 <div className="adress">收获地址管理</div>
           
            </div>
        )
    }
}
