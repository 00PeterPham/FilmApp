import React from 'react';
import './App.scss';
import InfoModal from './components/InfoModal/InfoModal';
import FilmCardList from './components/FilmCardList/FilmCardList';
import Loading from './components/Loading/Loading';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      filmsByReleaseData: null,
      modalInfo: {
        id: null, 
        title: null, 
        overview: null, 
        genres: null, 
        tagline: undefined, 
        runtime: null,
      },
      cast: null,
      isModalLoading: false,
    }
  }

  componentDidMount(){
    this.getFilmsByReleaseDate();
  }

  getFilmsByReleaseDate(){
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2019&api_key=189dd548751035955fbe4d60f48576c1')
    .then(response => response.json())
    .then((data)=>{

      const sortableFilms = data.results;
      const sortedByReleaseDate = [...sortableFilms].sort((a, b) => (a.release_date > b.release_date) ? 1 : -1);
      const filmsByReleaseDate = [];

      //Only keep films with a popularity of 10 or greater
      sortedByReleaseDate.map((item)=>{
        if(item.popularity >= 10){
          filmsByReleaseDate.push(item);
        }
        return filmsByReleaseDate;
      })

      this.setState({ 
        data, 
        isLoading: false ,
        filmsByReleaseDate,
      })
    });
  }

  openModal = (evt) => {
    const filmCardId = evt.currentTarget.getAttribute('id');

    this.setState({
      ...this.state,
      isModalLoading: true,
    })

    if(filmCardId){
      //Get generic film info
      fetch(`https://api.themoviedb.org/3/movie/${filmCardId}?api_key=189dd548751035955fbe4d60f48576c1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          modalInfo: data,
        })
      })
      .then(() => {
        //Get cast of film
        fetch(`https://api.themoviedb.org/3/movie/${filmCardId}?api_key=189dd548751035955fbe4d60f48576c1&append_to_response=credits`)
        .then(response => response.json())
        .then(data => {
          const cast = data.credits.cast;
    
          this.setState({
            ...this.state,
            cast,
            isModalLoading: false,
          })
        })
      })
    }
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      cast: null,
      isModalLoading: false,
    })
  }

  render(){
    const { isLoading, filmsByReleaseDate, cast, isModalLoading } = this.state;
    const { id, title, overview, genres, tagline, runtime } = this.state.modalInfo;
 
    if(isLoading){
      return <Loading />;
    }

    return (
      <React.Fragment>        
        <FilmCardList 
          filmsByReleaseDate={filmsByReleaseDate} 
          openModal={this.openModal} 
        />
        {
          isModalLoading ? 
          <Loading /> :
          null
        }
        { 
          cast ? 
          <InfoModal 
            closeModal={this.closeModal} 
            id={id}
            title={title} 
            overview={overview}
            genres={genres} 
            tagline={tagline || undefined} //If trying to use defaultProps (in InfoModal), and database is return null add ' || undfeind ' when passing prop
            runtime={runtime || undefined} 
            cast={cast}
          /> 
          : null
        }
      </React.Fragment>
    )
  }
}
