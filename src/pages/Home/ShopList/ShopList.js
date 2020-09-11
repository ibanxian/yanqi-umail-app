import React from 'react'
import "./ShopList.css"
import { Link } from 'react-router-dom'
export default function ShopList(props) {
    const { shopList } = props
    return (
        <div className="shopList">
            {shopList.map(item => {
                return <Link to={"/ShopDetail/" + item.id} key={item.id}>
                    <img src={item.img} alt="" />
                    <p>{item.goodsname}</p>
                    <span>￥{item.price}</span>
                    <button>立即抢购</button>
                </Link>
            })
            }
        </div>
    )
}
