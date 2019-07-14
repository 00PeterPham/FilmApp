import React from 'react';
import './FilmCard.scss';

const FilmCard = ({ id, img, title, openModal }) => {
  return (
    <div className='film-card' onClick={openModal} id={id}>
      <img alt={title} src={`https://image.tmdb.org/t/p/w500/${img}`} />
      <h2>{title}</h2>
    </div>
  )
}

export default FilmCard;