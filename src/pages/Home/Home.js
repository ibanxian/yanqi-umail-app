import React, { Component } from 'react'
import Header from "../../components/header/header"

import Banner from "./Banner/Banner"
import ShopList from "./ShopList/ShopList"
import { reqBanner, reqShopList } from '../../util/request'
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            // 轮播图初始数据
            banner: [],
            // 商品列表
            shopList: []
        }
    }
    componentDidMount() {
        // 轮播图
        reqBanner().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    banner: res.data.list
                })
            }
        })
        // 商品列表
        reqShopList().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    shopList: res.data.list[0].content
                })
            }
        })
    }
    render() {
        const { banner, shopList } = this.state
        return (
            <div>
                <Header title="首页"></Header>
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                {shopList.length > 0 ? <ShopList shopList={shopList}></ShopList> : null}
            </div>
        )
    }
}
