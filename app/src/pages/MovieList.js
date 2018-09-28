import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
    state = {};

    componentDidMount() {
      this._getMovies();
    }
  
    _renderMovies = () => {
      const movies = this.state.movies.map(movie => {
        return (
          <Movie 
            key={movie.id} 
            title={movie.title} 
            poster_path={movie.poster_path}
            overview={movie.overview} 
          />
        );
      });
      return movies;
    }
  
    _getMovies = async () => {
      const movies = await this._callApi();
      this.setState({
        movies
      })
    }
  
    _callApi = () => {
      // fetch('/api/users');
      /*
      1. GET ⇒ 설정(config) 데이터 : 예) 이미지 URL
      https://api.themoviedb.org/3/configuration?api_key=<APIKEY>
      2. 패치(fetch) ⇒ 키워드 검색, 무비 리스트 출력
      /search/movie?api_key=<APIKEY>&query=<keyword>
      3. 패치(fetch) ⇒ 상세 영화 정보
      /movie/<movie-id>?api_key=<APIKEY>
      4. 패치(fetch) ⇒ 출연진
      /movie/{movie_id}/credits 
      */
      // kobis 주간 영화 순위
      // fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=886336d18a9c4536da9f8ff1db2a7c98&targetDt=20180916&weekGb=0');
      return fetch('https://api.themoviedb.org/3/search/movie?api_key=bfdc49ba22b11be34746dd5c861c3d27&query=배트맨&language=ko')
      .then(response => response.json())
      .then(json => json.results)
      .catch(err => console.log(err));
    }

    render() {
        const { movies } = this.state;
        return (
            movies ? this._renderMovies() : "Loading.."
        );
    }
};

export default MovieList;