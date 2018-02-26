import React, {Component} from 'react';

import ImageTile from './ImageTile';
import SidePanel from './SidePanel';


class GameInstance extends Component{
    componentDidMount(){

        this.randomizeTiles();

    }


    constructor(props){
        super(props)
        this.state={
            pos1TileId:'',
            pos2TileId:'',
            pos3TileId:'',
            pos4TileId:'',
            pos5TileId:'',
            pos6TileId:'',
            pos7TileId:'',
            pos8TileId:'',
            pos9TileId:'',
            tileIdArr:[3]
        }

        this.randomizeTiles=this.randomizeTiles.bind(this);
    }

    

    randomizeTiles(){
        console.log('randomizing tiles')
        var starterArr=[1,2,3,4,5,6,7,8,9];
        var randomIdArr=[];
        for(var i=0;i<9;i++){
            var randIndex=Math.floor(Math.random()*starterArr.length)
            randomIdArr.push(starterArr[randIndex])
            starterArr.splice(randIndex,1)
        }

        console.log('randomIdArr:'+randomIdArr)
        
         this.setState({
            tileIdArr:randomIdArr,
         })
        console.log('this.state.tileIdArr: '+this.state.tileIdArr)
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
                <ImageTile posId={1} tileId={this.state.tileIdArr[0]}/>
                <ImageTile posId={2}/>
                <ImageTile posId={3} tileId={3}/>
            </div>
            <div className='row'>
                <ImageTile posId={4} tileId={4}/>
                <ImageTile posId={5} tileId={5}/>
                <ImageTile posId={6} tileId={6}/>
            </div>
            <div className='row'>
                <ImageTile posId={7} tileId={7}/>
                <ImageTile posId={8} tileId={8}/>
                <ImageTile posId={9} tileId={9}/>
            </div>
        </div>

        

        </div>
        )
    }

}

export default GameInstance;