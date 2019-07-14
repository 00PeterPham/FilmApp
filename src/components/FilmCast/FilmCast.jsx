import React from 'react';
import './FilmCast.scss';

const FilmCast = ({ cast, actorClicked }) => {
  const castNames = [];

  if(cast){
    Object.keys(cast).map(function(keyName) {
      const actor_name = cast[keyName].name;
      const person_id = cast[keyName].id

      castNames.push(
        <button 
          className="actor-button" 
          actor_name={actor_name}
          person_id={person_id}
          key={person_id}
          onClick={actorClicked}
        >
          {actor_name}
        </button>
      );
      return null;
    })
  }

  return (
    <React.Fragment>
      <h3>Cast</h3>
      {castNames}
    </React.Fragment>
  )
}

export default FilmCast;