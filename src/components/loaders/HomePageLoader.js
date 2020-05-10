import React from 'react';
import { Grid } from 'semantic-ui-react';

const HomePageLoader = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column verticalAlign='middle'>
                <div className='homepage-loading'></div>
                <h3>Loading Your Profile...</h3>
            </Grid.Column>
        </Grid>
    );
};

export default HomePageLoader;
