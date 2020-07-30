import React from 'react';
import Grid from '@material-ui/core/Grid';
import TreeViewList from '../TreeViewList/index'
import PipeInputTab from '../PipeInputTab/index';
function ListViewComponent() {
    return (
        <div >
            <Grid container spacing={0}  >
                <Grid md={6} >
                    <TreeViewList />
                </Grid>
                <Grid md={6} >
                    <PipeInputTab />
                </Grid>
            </Grid>
        </div>
    )
}

export default ListViewComponent