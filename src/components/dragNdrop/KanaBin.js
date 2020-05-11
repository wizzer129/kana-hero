import React from 'react';
import { DropTarget } from 'react-dnd';
const style = {
    height: '5rem',
    width: '5rem',
    border: 'solid rgba(170, 50, 220, .6)',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    lineHeight: '5rem',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};

export const KanaBin = ({ accepts, isOver, canDrop, connectDropTarget, lastDroppedItem }) => {
    const isActive = isOver && canDrop;
    let backgroundColor = 'lightpink';
    if (isActive) {
        backgroundColor = 'darkgreen';
    } else if (canDrop) {
        backgroundColor = 'green';
    }
    return connectDropTarget(
        <div style={{ ...style, backgroundColor }}>
            test
            {lastDroppedItem && <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>}
        </div>,
    );
};

export default DropTarget(
    (props) => props.accepts,
    {
        drop(props, monitor) {
            props.onDrop(monitor.getItem());
        },
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(KanaBin);
