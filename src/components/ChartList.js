import React from 'react';
import ListItem from './ListItem';

const ChartList = ({songs}) => {

    const songNodes = songs.map((song, index) => {
        return <ListItem song={song} key={index} />
    });

    return (
        <div>
            <ol>
                {songNodes}
            </ol>
        </div>
    );
};

export default ChartList;