import React from 'react';

const Movie = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.favorite ? 'pink' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Release date: {props.release_date}</p>
            <p className="description"> {props.description}</p>
            <p className="language">{props.language}</p>
            <button onClick={props.markFavorite} className='favoriteButton'>Favorite</button>
            <button className='deleteButton' onClick={props.deleteMovie}>Delete</button>
        </div>
    )

}


export default Movie;
