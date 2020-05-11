import React from 'react';
import { Checkbox, Grid } from 'semantic-ui-react';

const levels = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const LevelCheckBox = ({ onCheck, value }) => {
    return <Checkbox toggle onChange={onCheck} value={value} />;
};

const OptionCheckBoxes = ({ onCheck }) => {
    return levels.map((level) => {
        return (
            <Grid.Column key={`option-${level}`}>
                <LevelCheckBox onCheck={onCheck} value={level} />
            </Grid.Column>
        );
    });
};

const Options = () => {
    const onCheck = (e, data) => {
        console.log(e, data);
    };

    return <OptionCheckBoxes onCheck={onCheck} />;
};

export default Options;
