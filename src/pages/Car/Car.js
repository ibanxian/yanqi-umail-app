import React, { Component } from 'react'
import "./car.css"
import house from "../../assets/img/store.png"
import Header from "../../components/header/header"
import { reqCarList, reqCarEdit, reqCarDel } from "../../util/request"
import { successAlert, warningAlert, confirmAlert } from "../../util/alert"
export default class Car extends Component {
    constructor() {
        super()
        this.state = {
            carlist: [],
            editShow: false, // 编辑开关
            allShow: false, // 全选开关
            allpreis: 0, // 总价

        }
        this.isok = true
    }
    componentDidMount() {
        this.reqlist()
    }
    // 请求购物车列表
    reqlist() {
        let uid = sessionStorage.getItem("uid")
        reqCarList({ uid: uid }).then(res => {
            this.isok = true
            if (res.data.code === 200) {
                let list = res.data.list ? res.data.list : [];
                list.forEach(item => {
                    item.checked = false
                })
                this.setState({
                    carlist: list,
                    allShow: list.every(item => item.checked)
                })

            }
        })
    }
    // 选中某一条
    hig(e, index) {
        const { carlist } = this.state
        carlist[index].checked = !e.target.checked;
        this.setState({
            carlist,
            allShow: carlist.every(item => item.checked)
        })
    }
    // 全选
    all() {
        const { carlist } = this.state
        carlist.forEach(item => {
            item.checked = !item.checked
        })
        this.setState({
            carlist,
            allShow: !this.state.allShow
        })
        // 总价
        let allpreis = carlist.reduce((val, item) => {
            return val += item.price * item.num
        }, 0)
        this.setState({
            allpreis
        })
    }
    // 编辑
    edit() {
        this.setState({
            editShow: !this.state.editShow
        })
    }
    // 删除
    del(id) {
        confirmAlert(() => { }, () => {
            reqCarDel({ id: id }).then(res => {
                if (res.data.code === 200) {
                    this.reqlist() // 重新渲染列表
                    successAlert(res.data.msg)
                }
            })
        })
    }
    // 减少数量
    editLess(id, index) {
        const { carlist, } = this.state
        let num = carlist[index].num
        if (num <= 1) {
            warningAlert("不能再减少了")
            return;
        } else {
            console.log("=================================");
            console.log(num);
            console.log(this.isok);
            if (this.isok) {
                this.isok = false;
                reqCarEdit({ id: id, type: 1 }).then(res => {
                    if (res.data.code === 200) {
                        this.reqlist() // 重新渲染列表
                    }
                })

            }

        }
    }
    // 增加数量
    editAdd(id) {
        if (this.isok) {
            this.isok = false;
            reqCarEdit({ id: id, type: 2 }).then(res => {
                if (res.data.code === 200) {
                    this.reqlist() // 重新渲染列表
                }
            })
        }
    }
    render() {
        const { carlist, editShow, allShow, allpreis } = this.state
        return (
            <div className="car">
                <Header title="购物车" back></Header>
                <ul>
                    {
                        carlist.length > 0 ? carlist.map((item, index) => {
                            return <li key={item.id}>
                                <div className="inner">
                                    <p className="tit">
                                        <img src={house} alt="" />杭州保税区仓库</p>
                                    {/* 删除的类名是box-del,非删除是box */}
                                    <div className={editShow ? "box box-del" : "box"}>
                                        <div onClick={(e) => this.hig(e, index)} className={item.checked ? "pic_hig" : "pic_nosel"} checked={item.checked}></div>
                                        <img src={item.img} alt="" className="one" />
                                        <div className="des">
                                            <p>{item.goodsname}</p>
                                            <p>
                                                <span onClick={() => this.editLess(item.id, index)}>-</span>
                                                <span>{item.num}</span>
                                                <span onClick={() => this.editAdd(item.id)}>+</span>
                                            </p>
                                            <p>总价：￥{item.price * item.num}</p>
                                        </div>
                                        <div onClick={() => this.del(item.id)} className="car_del">删除</div>
                                    </div>
                                </div>
                            </li>
                        }) : null
                    }
                </ul>
                {/* 提示 */}
                {carlist.length === 0 ? (<div className="tis">
                    <p>--.--</p>
                    <p>↓ ↓</p>
                    购物车比脸都干净，去逛逛吧
                </div>) : null}
                <div className="footer">
                    <div className="all" onClick={() => this.all()}>
                        <div className={allShow ? "car_all_hig" : "car_all_nosel"}></div>
                        <div>全选</div>
                    </div>
                    <div className="all" onClick={() => this.edit()}>
                        <div className={editShow ? "car_edit_hig" : "car_edit_nosel"}></div>
                        <div>编辑</div>
                    </div>
                    <div className="all">合计：￥{allShow ? allpreis : 0}</div>
                    <div className="sum" onClick={() => this.sum()}>去结算</div>
                </div>
            </div>
        )
    }
}
