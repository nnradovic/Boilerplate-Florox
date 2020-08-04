import React from 'react';
import Grid from '@material-ui/core/Grid';
import PipeMap from '../PipeMap/index'
import PipeInputTab from '../PipeInputTab/index';
function MapViewComponent() {

    return (
        <Grid container spacing={0}  >
            <Grid md={6} item={true} >
                <PipeMap />
            </Grid>
            <Grid md={6} item={true} >
                <PipeInputTab />
            </Grid>
        </Grid>
    )
}
export default MapViewComponent