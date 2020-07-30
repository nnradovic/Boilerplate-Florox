import React from 'react';
import Grid from '@material-ui/core/Grid';
import SideBarComponent from '../SideBar/SideBarComponent'
import MainComponent from '../Main/MainComponent';
function BoardComponent() {
    return (
        <Grid container spacing={0}>
            <Grid md={2} >
                <SideBarComponent />
            </Grid>
            <Grid md={10} >
                <MainComponent />
            </Grid>
        </Grid>
    )
}

export default BoardComponent