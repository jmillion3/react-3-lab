// import React, {Component} from 'react';
// import data from '../data.js';

// class Buttons extends Component{
//     constructor(){
//         super();

//         this.state = {
//            currentIndex: 0
//         }
//     }

//     previousEmp(){
//         let index = this.state.currentIndex
//         if(index > 0){
//             this.setState({currentIndex: index--})
//         }
//     }

//     nextEmp(){
//         let index = this.state.currentIndex
//         if(index < data.length -1){
//             this.setState({currentIndex: index++})
//         }
//     }

//     render(){
//         return(
//             <div className="buttons">
//                 <button onClick={() => this.previousEmp()} name="id"> {'<'} Previous </button>
//                 <button onClick={() => this.nextEmp()} name="id"> Next {'>'} </button>
//             </div>
//         )
//     }
// }

// export default Buttons