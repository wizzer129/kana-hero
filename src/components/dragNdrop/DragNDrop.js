import React from 'react';
import Game from './Game';
import Options from './Options';
import Timer from './Timer';
import { Grid, Header } from 'semantic-ui-react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const DragNDrop = () => {
    return (
        <div className='DragNDrop-Container'>
            <Header textAlign='center'>Kana Drag `N Drop</Header>
            <Grid celled='internally' padded textAlign='center'>
                <Options />
                <Grid.Row>
                    <DndProvider backend={Backend}>
                        <Game />
                    </DndProvider>
                </Grid.Row>
                <Grid.Row>
                    <Timer />
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default DragNDrop;
