import React, { Component } from 'react'
import DataSelection from './DataSelection'
import data from '../data'
// import Buttons from './Buttons'

class Profile extends Component {
    constructor(){
        super()
        
        this.state = {
            currentIndex: 0,
        }
    }

    previousEmp(){
        let index = this.state.currentIndex
        if(index > 0){
            this.setState({currentIndex: index - 1})
        }
    }

    nextEmp(){
        let index = this.state.currentIndex += 1
        if(index < data.length -1){
            this.setState({currentIndex: index})
        }
    }

    render(){
        return(
            <div className="profile">
                <DataSelection
                currentEmp={data[this.state.currentIndex]}/>
                <div className="buttons">
                    <button onClick={() => this.previousEmp()} name="id"> {'<'} Previous </button>
                    <button onClick={() => this.nextEmp()} name="id"> Next {'>'} </button>
                </div>
            </div>
        )
    }
}
export default Profile