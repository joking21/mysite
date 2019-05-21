import React from 'react';
import { Link } from 'react-router-dom';
class PageApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to='/'>首页</Link>
                test
            </div>
        )
    }
}
export default PageApp;

