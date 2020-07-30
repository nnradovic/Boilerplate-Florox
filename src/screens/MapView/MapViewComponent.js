import React from 'react';
import Grid from '@material-ui/core/Grid';
import PipeMap from '../PipeMap'
import PipeInputTab from '../PipeInputTab/index';
function MapViewComponent() {

    return (
        <Grid container spacing={0}  >
            <Grid md={6} >
                <PipeMap />
            </Grid>
            <Grid md={6} >
                <PipeInputTab />
            </Grid>
        </Grid>
    )
}
export default MapViewComponent