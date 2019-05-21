import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Aside from '../templates/Aside';
import routerList from './base';
import NoMatch from '../views/Page404'
class Applayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                {
                    routerList.map((item, key) => {
                        return (

                            <Route key={key}
                                exact={item.exact}
                                path={item.path}
                                render={() => (
                                    <div>
                                        <Header />
                                        <item.component />
                                    </div>

                                )}
                            />


                        )
                    })
                }
                <Route component={NoMatch} />
            </Switch>
        )
    }
}
export default Applayout;