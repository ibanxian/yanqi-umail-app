import React, { Component } from 'react'
import "./ClassGoods.css"
import img from "../../assets/img/img/home/jifen.png"
import { reqGoodsList } from '../../util/request'
import Header from "../../components/header/header"
import { Link } from 'react-router-dom'
export default class classGoods extends Component {
    constructor() {
        super();
        this.state = {
            goodlist: []
        }
    }
    componentDidMount() {
        let fid = this.props.match.params.id;
        reqGoodsList({ fid: fid }).then(res => {
            if (res.data.code === 200) {
                let arr = res.data.list ? res.data.list : []
                this.setState({
                    goodlist: arr
                })
            }
        })
    }
    render() {
        const { goodlist } = this.state
        return (
            <div className="ClassGoods">
                <Header title="商品列表" back></Header>
                <ul>
                    {
                        goodlist.length > 0 ? goodlist.map(item => {
                            return <Link to={"/ShopDetail/" + item.id} key={item.id}>
                                <img src={item.img}  alt="" />
                                <div>
                                    <p>{item.goodsname}</p>
                                    <p className="price">{item.price}</p>
                                    <span>立即抢购</span>
                                </div>
                            </Link>
                        }) : "暂无商品"
                    }

                </ul>
            </div>
        )
    }
}
