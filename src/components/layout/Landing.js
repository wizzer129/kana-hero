import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import Smiley from '../landing/Smiley';

const Landing = () => {
    return (
        <div className='Landing-Container'>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='teal' textAlign='center'>
                        Kana Hero かなヒーロー
                    </Header>

                    <Button as={Link} color='teal' fluid size='large' to='/learn'>
                        Learn Kana
                    </Button>
                    <br />
                    <Button as={Link} color='teal' fluid size='large' to='/dragNdrop'>
                        Drag 'N Drop Kana Game
                    </Button>
                </Grid.Column>
            </Grid>
            <Smiley />
        </div>
    );
};

export default Landing;
