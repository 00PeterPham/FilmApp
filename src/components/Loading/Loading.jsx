import React from 'react';
import loading_img from '../../imgs/loading.gif';
import './Loading.scss';

const Loading = () => {
  return(
    <img alt="loading" className="loading-gif" src={loading_img} />
  )
}

export default Loading;