import axios from "axios"
import qs from "qs"
import { warningAlert } from "../util/alert"
//请求拦截
axios.interceptors.request.use(config => {
    // 如果是登录页面，直接反馈config
    if (config.url === "/login") {
        return config;
    }
    // 登录后把用户token写在请求头上
    let token = sessionStorage.getItem("token")
    config.headers.authorization = token;
    return config;
})

// 相应拦截
axios.interceptors.response.use(res => {
    console.group("=======请求地址：" + res.config.url + "=======")
    console.log(res);
    console.groupEnd()
    // 如果登入过期，遇到以下情况
    if (res.data.msg === "登录已过期或访问权限受限") {
        warningAlert("登录已过期或访问权限受限")
        // 清空info
        sessionStorage.removeItem("token")
        // 跳转到登录 
        this.props.history.push("/login")
    }
    return res;
})
//注册
export const reqRegister = (form) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(form)
    })
}
//登录
export const reqLogin = (form) => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(form)
    })
}
// 首页-banner
export const reqBanner = (params) => {
    return axios({
        url: "/api/getbanner",
        method: "get",
        params: params
    })
}
// 首页-商品列表
export const reqShopList = (params) => {
    return axios({
        url: "/api/getindexgoods",
        method: "get",
        params: params
    })
}
// 首页-分类列表
export const reqFenLei = (params) => {
    return axios({
        url: "/api/getcate",
        method: "get",
        params: params
    })
}
// 首页-分类下级列表
export const reqFenLeiTree = (params) => {
    return axios({
        url: "/api/getcatetree",
        method: "get",
        params: params
    })
}
// 首页-分类商品ist
export const reqGoodsList = (params) => {
    return axios({
        url: "/api/getgoods",
        method: "get",
        params: params
    })
}
// 首页-商品详情
export const reqGoodDetail = (params) => {
    return axios({
        url: "/api/getgoodsinfo",
        method: "get",
        params: params
    })
}
// 加入购物车
export const reqCarAdd = (params) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: params
    })
}
// 购物车列表
export const reqCarList = (params) => {
    return axios({
        url: "/api/cartlist",
        method: "get",
        params: params
    })
}
// 商品修改
export const reqCarEdit = (form) => {
    return axios({
        url: "/api/cartedit",
        method: "post",
        data: qs.stringify(form)
    })
}
// 商品删除
export const reqCarDel = (form) => {
    return axios({
        url: "/api/cartdelete",
        method: "post",
        data: qs.stringify(form)
    })
}