import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.scss'

export default class Footer extends Component {

    static propTypes = {}

    render() {
        return (
            <footer className='Footer'>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link className='icon-mail' to='/orderlist'>订单</Link></li>
                    <li><Link className='icon-mail' to='/orderlist'>订单</Link></li>
                    <li><Link to='/center'>我的</Link></li>
                </ul>
            </footer>
        )
    }
}