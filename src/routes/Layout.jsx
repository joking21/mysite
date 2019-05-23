import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Aside from '../templates/Aside';
import Navbar from '../templates/Navbar';
import routerList from './base';
import NoMatch from '../views/Page404';
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
                                    // islogin ? <Redirect to="/login" /> 
                                    <div>
                                        <Header />
                                        <Navbar />
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