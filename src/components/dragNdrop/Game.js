import React, { useState, useCallback } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import KanaBin from './KanaBin';
import KanaBox from './KanaBox';
import ItemTypes from './ItemTypes';
import update from 'immutability-helper';

const KanaDragNDropGame = () => {
    const [dustbins, setDustbins] = useState([
        { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
        {
            accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
            lastDroppedItem: null,
        },
        { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
    ]);

    const [boxes] = useState([
        { name: 'Bottle', type: ItemTypes.GLASS },
        { name: 'Banana', type: ItemTypes.FOOD },
        { name: 'Magazine', type: ItemTypes.PAPER },
    ]);

    const [droppedBoxNames, setDroppedBoxNames] = useState([]);

    const isDropped = (boxName) => {
        return droppedBoxNames.indexOf(boxName) > -1;
    };

    const handleDrop = useCallback(
        (index, item) => {
            const { name } = item;
            setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
            setDustbins(
                update(dustbins, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                }),
            );
        },
        [droppedBoxNames, dustbins],
    );

    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                    <KanaBin
                        accepts={accepts}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={(item) => handleDrop(index, item)}
                        key={index}
                    />
                ))}
            </div>

            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {boxes.map(({ name, type }, index) => (
                    <KanaBox name={name} type={type} isDropped={isDropped(name)} key={index} />
                ))}
            </div>
        </div>
    );
};

export default KanaDragNDropGame;
