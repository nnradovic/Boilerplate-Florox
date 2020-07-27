import React from 'react';
import Grid from '@material-ui/core/Grid';
import PipeMap from '../PipeMap/PipeMapComponent'
import PipeInputTab from '../PipeInputTab/PipeInputTabComponent';
function MapViewComponent() {

    return (
        <Grid container spacing={0} style={{ backgroundColor: "green", height: 250 }}>
            <Grid md={6} >
                <PipeMap />
            </Grid>
            <Grid md={6}>
                <PipeInputTab />
            </Grid>
        </Grid>
    )
}
export default MapViewComponent