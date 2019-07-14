import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import film_roll from '../../imgs/film_roll.png';
import './FilmCardList.scss';

const FilmCardList =({ filmsByReleaseDate, openModal }) => {
  const filmCardList = [];

  filmsByReleaseDate.map((item) => {
    filmCardList.push(
      <FilmCard 
        id={item.id}
        alt={item.title}
        img={item.backdrop_path}
        title={item.title}
        key={item.id}
        openModal={openModal}
      />
    );
    return filmCardList;
  })

  return (
    <React.Fragment>
      <h1><img alt="Logo" src={film_roll} />Films</h1>
      <div className="film-card-container">
        {filmCardList}
      </div>
    </React.Fragment>
  )
}
export default FilmCardList;