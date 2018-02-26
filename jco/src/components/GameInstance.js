import React, {Component} from 'react';

import ImageTile from './ImageTile';
import SidePanel from './SidePanel';


class GameInstance extends Component{
    
    constructor(props){
        super(props)
        this.state={
            pos1TileId:'5',
            pos2TileId:'',
            pos3TileId:'',
            pos4TileId:'',
            pos5TileId:'',
            pos6TileId:'',
            pos7TileId:'',
            pos8TileId:'',
            pos9TileId:'',
        }

        this.randomizeTiles=this.randomizeTiles.bind(this);
    }

    componentDidMount(){

        this.randomizeTiles();

    }

    randomizeTiles(){
        console.log('randomizing tiles')
        var starterArr=[1,2,3,4,5,6,7,8,9];
        var tileIdArr=[];
        for(var i=0;i<9;i++){
            var randIndex=Math.floor(Math.random()*starterArr.length)
            tileIdArr.push(starterArr[randIndex])
            starterArr.splice(randIndex,1)
        }

        console.log(tileIdArr)
        
         this.setState({
            pos1TileId:tileIdArr[0],
            pos2TileId:3
         })
        console.log('state of this '+this.state.pos1TileId)
        //console.log('randomized array is:'+randomizedArr)
    }
    





    render(){
        return(
        <div className='container'>
        
        <div className='col-md-6'>
            <SidePanel/>
        </div>

        <div className='col-md-6'>
            <div className='row'>
                <ImageTile posId={1} tileId={this.state.pos1TileId}/>
                <ImageTile posId={2}/>
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

        

        </div>
        )
    }

}

export default GameInstance;