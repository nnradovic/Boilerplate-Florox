import React from 'react';
import Grid from '@material-ui/core/Grid';
import TreeViewList from '../TreeViewList/index'
import PipeInputTab from '../PipeInputTab/index';

function ListViewComponent() {
    return (
        <Grid container spacing={0}  >
            <Grid md={6} item={true}  >
                <TreeViewList />
            </Grid>
            <Grid md={6} item={true} >
                <PipeInputTab />
            </Grid>
        </Grid>
    )
}

export default ListViewComponent