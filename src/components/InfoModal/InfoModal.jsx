import React from 'react';
import './InfoModal.scss';
import FilmsByActor from '../FilmsByActor/FilmsByActor';
import FilmCast from '../FilmCast/FilmCast';

export default class InfoModal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected_actor: null,
      filmsByActorData: null,
    }
  }
  getRelatedFilms = (evt) => {
    const person_id = evt.target.getAttribute('person_id');

    fetch(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=189dd548751035955fbe4d60f48576c1`)
    .then(response => response.json())
    .then(data => {
      const filmsByActorData = [];

      data.cast.map((film) => {
        const filmTitle = film.original_title;
        filmsByActorData.push(`${filmTitle}, `);
        return null;
      })

      this.setState({
        ...this.state,
        filmsByActorData, 
      })
    })
  }
  setSelectedActor = (evt) => {
    const selected_actor = evt.target.getAttribute('actor_name');
    
    this.setState({
      ...this.state,
      selected_actor,
    })
  }
  actorClicked = (evt) => {
    this.getRelatedFilms(evt);
    this.setSelectedActor(evt);
  }


  render(){
    const { modalInfo, closeModal, cast } = this.props;
    const { selected_actor, filmsByActorData } = this.state;
    const { id, title, overview, genres, tagline, runtime } = modalInfo;
    const genresList = [];

    genres.map((genre) => {
      genresList.push(`${genre.name}, `);
      return null;
    })

    return (
      <React.Fragment>
        <div className="opaqueBG" onClick={closeModal} ></div>
        <div className="info-modal" id={id}>
          <h2 className="info-text"><label>Title:</label><span>{title}</span></h2>
          <div className="info-text"><label>Description:</label><span>{overview}</span></div>
          <div className="info-text"><label>Genres:</label><span>{genresList}</span></div>
          <div className="info-text"><label>Tag Line:</label><span>{tagline}</span></div>
          <div className="info-text"><label>RunTime:</label><span>{runtime} min</span></div>
          <FilmCast cast={cast} actorClicked={this.actorClicked}/>
          {
            selected_actor ? 
            <FilmsByActor 
              selected_actor={selected_actor} 
              filmsByActorData={filmsByActorData} 
            />
            : null
          }
        </div>
      </React.Fragment>
    )
  }
}