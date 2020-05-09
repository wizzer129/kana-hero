import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';

const Landing = () => {
    return (
        <div className='Landing-Container'>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Kana Hero かなヒーロー
                    </Header>

                    <Button as={Link} color='teal' fluid size='large' to='/learn'>
                        Learn Kana
                    </Button>
                    <br />
                    <Button as={Link} color='teal' fluid size='large' to='/dragNdrop'>
                        Match Kana
                    </Button>
                </Grid.Column>
            </Grid>
            <div className='Menu-Circle'>
                <div className='Smiley-Face'>･ᴗ･</div>
            </div>
        </div>
    );
};

export default Landing;
