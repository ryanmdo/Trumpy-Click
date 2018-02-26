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
        <div>
            <div className='row'>
                <ImageTile/>
                <ImageTile/>
                <ImageTile/>
                GameInstance Row 1
            </div>

            <div className='row'>
                <ImageTile/>
                <ImageTile/>
                <ImageTile/>
                GameInstance Row 2
            </div>
            <div className='row'>
                <ImageTile/>
                <ImageTile/>
                <ImageTile/>
                GameInstance Row 3
            </div>
        </div>
        )
    }

}

export default GameInstance;