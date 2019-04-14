import React, { Fragment } from 'react';
import { withContext } from '../context';

import ArticleListItem from './ArticleListItem';

import { List, Divider, } from '@material-ui/core';


const ArticleList = (props) => {
    
    const articles = props.nodes.map((node, i, arr) => (
        <Fragment key={i}>
            <ArticleListItem node={node} />
            {(i !== arr.length - 1) && <Divider /> }
        </Fragment>
        )
    );

    return (
        <List>
            {articles}
        </List>
    );
}

export default withContext(ArticleList);
