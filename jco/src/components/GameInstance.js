import React, {Component} from 'react';

import ImageTile from './ImageTile';


class GameInstance extends Component{
    
    constructor(props){
        super(props)
        this.state={
            
        }
    }



    render(){
        return(
        <div className='container'>
            <div className='row'>
                <ImageTile tileId={1}/>
                <ImageTile tileId={2}/>
                <ImageTile/>
            </div>
            <div className='row'>
                <ImageTile/>
                <ImageTile/>
                <ImageTile/>
            </div>
            <div className='row'>
                <ImageTile/>
                <ImageTile/>
                <ImageTile/>
            </div>
        </div>
        )
    }

}

export default GameInstance;