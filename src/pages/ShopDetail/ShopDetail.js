import React, { Component } from 'react'
import Header from "../../components/header/header"
import { reqGoodDetail, reqCarAdd } from '../../util/request'
import "./ShopDetail.css"
import { Toast } from 'antd-mobile';
export default class ShopDetail extends Component {
    constructor() {
        super();
        this.state = {
            shopdetail: {},
            des: "<div></div>",
            isShow: false,
            specsattr: [],
            n: 0
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        // 商品详情
        reqGoodDetail({ id: id }).then(res => {
            if (res.data.code === 200) {
                let specsattr = JSON.parse(res.data.list[0].specsattr)
                this.setState({
                    shopdetail: res.data.list[0],
                    specsattr: specsattr
                })
            }
        })
    }
    // 添加购物车
    Car(id) {
        let uid = sessionStorage.getItem("uid")
        reqCarAdd({ goodsid: id, uid: uid, num: 1 }).then(res => {
            if (res.data.code === 200) {
                Toast.success(res.data.msg, 1);
                this.setState({ isShow: false }) // 关闭蒙版
            } else {
                Toast.fail(res.data.msg, 1);
            }
        })
    }
    // 打开
    show() {
        this.setState({
            isShow: true
        })
    }
    // 规格选择
    sprcclik(index) {
        this.setState({
            n: index
        })
    }
    // 关闭
    hide(e) {
        e.target.className === "shop_mar" && this.setState({ isShow: false })
    }
    render() {
        const { shopdetail, isShow, specsattr, n } = this.state
        if (this.refs.des && shopdetail.description) {
            this.refs.des.innerHTML = shopdetail.description
        }
        return (
            <div>
                <Header title={shopdetail.goodsname} back></Header>
                <div className="shop">
                    <div className="shop_top">
                        <div className="shop_img">
                            <img src={shopdetail.img} alt="" />
                        </div>
                        <p className="shop_p">
                            <span className="shop_name">{shopdetail.goodsname}</span>
                            <span className="shop_sc">收藏</span>
                        </p>
                        <p className="shop_p">
                            <span className="shop_price">￥{shopdetail.price}</span>
                            {shopdetail.ishot === 1 ? <span className="shop_ico">热卖</span> : null}
                            {shopdetail.isnew === 1 ? <span className="shop_ico">新品</span> : null}
                        </p>
                        <p>
                            <span className="shop_priceold">￥{shopdetail.market_price}</span>
                        </p>
                    </div>
                    <div className="shop_des" ref="des"></div>
                    <div className="shop_bottom">
                        <button onClick={() => this.show()} className="shop_car">加入购物车</button>
                    </div>
                    {isShow ? <div className="shop_spec">
                        <div onClick={(e) => this.hide(e)} className="shop_mar"></div>
                        <div className="shop_con">
                            <p className="shop_con_p"><img className="shop_con_img" src={shopdetail.img} alt="" />
                                <span className="shop_con_title">{shopdetail.goodsname}</span></p>
                            <p className="shop_con_p">{shopdetail.specsname}</p>
                            <div className="shop_con_p">
                                {specsattr.length > 0 ? specsattr.map((item, index) => {
                                    return <div key={item} onClick={() => this.sprcclik(index)} className={n === index ? "shop_spec_list active" : "shop_spec_list"}>{item}</div>
                                }) : null
                                }

                            </div>
                            <button className="shop_jia" onClick={() => this.Car(shopdetail.id)}>加入购物车</button>
                        </div>
                    </div> : null}
                </div>
            </div>
        )
    }
}
