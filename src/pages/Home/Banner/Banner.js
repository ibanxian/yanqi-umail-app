import React from 'react'
import "./Banner.css"
import { Carousel } from "antd-mobile"
export default function Banner(props) {
    const { banner } = props
    return (
        <div className="banner">
            <Carousel
                autoplay
                infinite
            >
                {
                    banner.map(item => {
                        return <img key={item.id} src={item.img} alt="" />
                    })
                }
            </Carousel>
        </div>
    )
}
