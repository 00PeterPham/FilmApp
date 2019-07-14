import React from 'react';
import './FilmsByActor.scss';

const FilmsByActor = ({ selected_actor, filmsByActorData }) => {
  return(
    <React.Fragment>
      <h3>Films {selected_actor} has been in:</h3>
      <p>
        {filmsByActorData}
      </p>
    </React.Fragment>
  )
}

export default FilmsByActor;