/**
 * Created by caelumtian on 16/5/14.
 */
import React from 'react';
import {Router, Route, IndexRoute, Redirect, browserHistory, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HomePage from './page/HomePage';
import LayoutPage from './page/Layout';
import CardPage from './page/CardPage';

class App extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup component="div" transitionName="hui-page" transitionEnterTimeout={500} transitionLeaveTimeout={300} style={{height: '100%'}}>
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        )
    }
}
const MainRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="layout" component={LayoutPage}/>
            <Route path="card" component={CardPage} />
        </Route>
    </Router>
);

export default MainRouter;
