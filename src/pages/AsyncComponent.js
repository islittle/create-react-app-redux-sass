import React, { Component } from "react";

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null,
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            const that = this;
            setTimeout(function (){
                that.setState({
                    component: component,
                });
            },10)
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}