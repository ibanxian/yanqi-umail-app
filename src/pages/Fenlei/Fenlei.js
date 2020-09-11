import React, { Component } from 'react'
import "./Fenlei.css"
import Header from "../../components/header/header"

import { reqFenLei, reqFenLeiTree } from '../../util/request'
import FenLeiTree from "./FenLeiTree/FenLeiTree"
export default class FenLei extends Component {
    constructor() {
        super()
        this.state = {
            // 分类初始数据
            fenlei: [],
            // 分类下级列表
            fenleitree: [],
            n: 0, // 计数器
            treeid: 12,
        }
    }
    componentDidMount() {
        // 分类列表
        reqFenLei().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    fenlei: res.data.list
                })
            }
        });
        reqFenLeiTree().then(res => {
            if (res.data.code === 200) {
                this.setState({
                    fenleitree: res.data.list
                })
            }
        })
    }
    select(index, id) {
        this.setState({
            n: index,
            treeid: id
        })
    }
    render() {
        const { fenlei, n, treeid, fenleitree } = this.state
        return (
            <div className="fenlei">
                <Header title="商品分类" back></Header>
                <div className="con">
                    <div className="left">
                        <ul>
                            {/* 分类列表 */}
                            {fenlei.map((item, index) => {
                                return <li key={item.id} className={index === n ? "select" : ""} onClick={() => this.select(index, item.id, item.catename)}>{item.catename}</li>
                            })}
                        </ul>
                    </div>
                    {fenleitree.length > 0 ? <FenLeiTree fenleitree={fenleitree} treeid={treeid}></FenLeiTree> : null}
                </div>
            </div>
        )
    }
}
