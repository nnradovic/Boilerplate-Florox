import React from 'react';
import MapView from './components/MapView/MapViewComponent';
import ListView from './components/ListView/ListViewComponent'
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
        </Switch>
    )
}

export default RouterComponent