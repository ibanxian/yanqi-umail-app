import React, { Component } from 'react'
import "./header.css"
import {withRouter} from "react-router-dom"
class Header extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        const {title,back}=this.props
        return (
            <div className="header">
                {
                    back?<span className="header-btn " onClick={()=>this.goBack()}>返回</span>:null
                }
                <div className="header-title">
                    {title}
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
