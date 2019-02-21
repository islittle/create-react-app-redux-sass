import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { NavBar, Icon } from 'antd-mobile'
import reqwest from 'reqwest'
import './index.scss'

class Center extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    componentWillMount() {
       reqwest(window.location.origin+'?fetch=center')
    }

    goBack = () => {
        this.context.router.go(-1)
    }

    render() {
        return (
            <div className="Center">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.goBack}
                >个人中心</NavBar>
                <p className="desc">个人中心内容哦~</p>
                <Link to="/orderlist" className="sub">点击进入订单列表</Link>
            </div>
        )
    }
}

export default Center
