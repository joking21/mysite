import React from 'react';
import { Link } from 'react-router-dom';
import App from '../components/app/App';
import Test from '../components/app/test'
import { storeTest, storeTest1 } from '../components/app/mobxTest'

class PageApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to='/test'>test</Link>
                <App store={storeTest} store1={storeTest1} />
                <Test store={storeTest} />
            </div>
        )
    }
}
export default PageApp;

