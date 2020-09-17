import React from 'react';

function SongRow({ track }) {
    return (
        <div>
            <p>{track.name}</p>
        </div>
    )
}

export default SongRow;
