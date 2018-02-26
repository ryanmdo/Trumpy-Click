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
                <ImageTile tileId={3}/>
            </div>
            <div className='row'>
                <ImageTile tileId={4}/>
                <ImageTile tileId={5}/>
                <ImageTile tileId={6}/>
            </div>
            <div className='row'>
                <ImageTile tileId={7}/>
                <ImageTile tileId={8}/>
                <ImageTile tileId={9}/>
            </div>
        </div>
        )
    }

}

export default GameInstance;