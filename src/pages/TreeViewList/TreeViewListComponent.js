import React from 'react';
import ItemTree from '../../components/organisms/ItemTree/itemTree'

function TreeViewListComponent({ treeData }) {
    return (
        <div className="frame " >
            <ItemTree treeData={treeData} />
        </div>
    )
}

export default TreeViewListComponent