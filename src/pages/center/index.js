import React, { Component } from 'react'
import { Link } from 'react-router'
import { NavBar, Icon } from 'antd-mobile'
import reqwest from 'reqwest'
import './index.scss'

class Center extends Component {
    componentWillMount() {
       reqwest(window.location.origin+'?fetch=center')
    }

    render() {
        return (
            <div className="Center">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { window.history.go(-1) }}
                >个人中心</NavBar>
                <p>个人中心内容哦~</p>
                <Link to="/orderlist" className="sub">点击进入订单列表</Link>
            </div>
        )
    }
}

export default Center
