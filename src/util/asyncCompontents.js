import React,{Component} from "react"
function asyncComponent(fn){
    class ZuJian extends Component{
        constructor(){
            super()
            this.state={
                C:null
            }
        }
        componentDidMount(){
            // import("./pages/Index/Index")
            fn().then(mod=>{
                this.setState({
                    C:mod.default
                })
            })
        }
        render(){
            let {C}=this.state
            return (
                <div>
                    {C?<C {...this.props}></C>:null} 
                </div>
            )
        }
    }
    return ZuJian;
}

export default asyncComponent;