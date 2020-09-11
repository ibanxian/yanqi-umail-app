import React from 'react'
import { Link } from 'react-router-dom'
export default function FenLeiTree(props) {
    const { fenleitree, treeid} = props
    let arr = fenleitree.find(item => {
        return item.id === treeid
    })
    let arrlist = arr.children
    return (
        <div className="right">
            {arrlist.map(item => {
                return <Link to={"/ClassGoods/" + item.id} className="box" key={item.id}>
                    <img src={item.img}  alt="" />
                    <p>{item.catename}</p>
                </Link>
            })}
        </div>
    )
}
