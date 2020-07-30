import React from 'react';
import MapView from './screens/MapView/MapViewComponent';
import ListView from './screens/ListView/ListViewComponent'
import Test from './screens/Test/index'
import { Switch, Route, } from "react-router-dom";
function RouterComponent() {


    return (
        <Switch>
            <Route exact path="/">
                <MapView />
            </Route>
            <Route path="/list">
                <ListView />
            </Route>
            <Route path="/test">
                <Test />
            </Route>
        </Switch>
    )
}

export default RouterComponent