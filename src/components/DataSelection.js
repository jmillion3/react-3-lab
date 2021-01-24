import React, {Component} from 'react';

class DataSelection extends Component{
    constructor(){
        super()
        this.state= {}
    }
    
    render(){
        
        return (
            <div className='employee'>
                <h1 className = 'id'>{this.props.currentEmp.id}/25</h1>
                <h1 className='name'>{this.props.currentEmp.name.first} {this.props.currentEmp.name.last}</h1>
                    <span className='info'>
                        <h3>From:  {this.props.currentEmp.city}, {this.props.currentEmp.country}</h3>
                        <h3>Job Title:  {this.props.currentEmp.title}</h3>
                        <h3>Employer:  {this.props.currentEmp.employer}</h3>
                    </span>
                    <span className='movies'>
                        <h3>Favorite Movies:</h3>
                        <div className='movie-list'>
                            <p>1. {this.props.currentEmp.favoriteMovies[0]}</p>
                            <p>2. {this.props.currentEmp.favoriteMovies[1]}</p>
                            <p>3. {this.props.currentEmp.favoriteMovies[2]}</p>
                        </div>
                    </span>
            </div>
            )
        }
    }

export default DataSelection