import React, {Component} from 'react';

class DataSelection extends Component{
    constructor(){
        super()
        this.state= {}
    }
    
    renderMovieList(){
        const {favoriteMovies} = this.props.currentEmp;
        const movieList = favoriteMovies.map((movie, i) => {
            return (
                <p key={movie}>{i += 1} {movie}</p>
            )
        })
        return movieList;
    }

    render(){
        const {id, name, city, country, title, employer} = this.props.currentEmp
        const {first, last} = name;
    
        return (
            <div className='employee'>
                <h1 className = 'id'>{id}/25</h1>
                <h1 className='name'>{first} {last}</h1>
                    <span className='info'>
                        <h3>From:  {city}, {country}</h3>
                        <h3>Job Title:  {title}</h3>
                        <h3>Employer:  {employer}</h3>
                    </span>
                    <span className='movies'>
                        <h3>Favorite Movies:</h3>
                        <div className='movie-list'>
                            {this.renderMovieList()}
                        </div>
                    </span>
            </div>
            )
        }
    }

export default DataSelection