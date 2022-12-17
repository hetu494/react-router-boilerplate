import React from 'react';
import { useParams } from "react-router-dom";


function Player() {

    const { id } = useParams()
    return (
        <div>Player Page {id}</div>
    )
}

export default Player;