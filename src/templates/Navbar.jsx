import React from 'react';
import { withRouter } from 'react-router-dom';
import "../style/navbar.less";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '/',
        }
    }
    componentDidMount() {
        this.setState({
            url: window.location.pathname,
        })
    }
    jumpTo(index) {
        this.setState({
            url: index,
        })
        this.props.history.push(index);
    }
    render() {
        return (
            <div className="d-nav">
                <ul className="nav">
                    <li className={this.state.url === '/' ? 'is-active' : ''} onClick={() => this.jumpTo('/')}>首页</li>
                    <li className={this.state.url === '/test' ? 'is-active' : ''} onClick={() => this.jumpTo('/test')} > 测试</li>
                </ul>
            </div>
        )
    }
}
export default withRouter(Navbar);
