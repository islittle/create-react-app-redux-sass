import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'
import reqwest from 'reqwest'
import { connect } from 'utils'
import { Footer } from 'component'
import './index.scss'

@connect('/', 'HomeState', 'fetchChannels')
class Home extends Component {
    static propTypes = {
        HomeState: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        actions:  PropTypes.object.isRequired,
    }
    componentWillMount() {
        reqwest(window.location.origin+'?fetch=home')
        const self = this
        self.props.actions.fetchChannels()
    }

    render() {
        const { HomeState, actions, route } = this.props
        const channels = HomeState.channels
        console.log(channels, actions, route)
        return (
            <div className="Home">
                <NavBar
                    mode="light"
                    rightContent={
                        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />
                  }
                >一条生活馆</NavBar>
                {channels.cinemaCount}
                <Link to="/center" className="sub">进入个人中心</Link>
                <Footer />
            </div>
        )
    }
}
export default Home
