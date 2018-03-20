import React, {Component} from 'react';
import ImageTile from './ImageTile';
import SidePanel from './SidePanel';






class GameInstance extends Component{
    componentDidMount(){

        this.randomizeTiles();

    }

    //This should be the one that handles the click of a tile... I think.
    handleTileClick(){
        console.log('GameInstance knows that a tile has been clicked')
    }


    constructor(props){
        super(props)
        //console.log(tileIdArr)
        this.state={
            pos1TileId:7,
            pos2TileId:'',
            pos3TileId:'',
            pos4TileId:'',
            pos5TileId:'',
            pos6TileId:'',
            pos7TileId:'',
            pos8TileId:'',
            pos9TileId:'',
            tileIdArr:{}
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
            pos1TileId: randomIdArr[0],
            pos2TileId: randomIdArr[1],
            pos3TileId: randomIdArr[2],
            pos4TileId: randomIdArr[3],
            pos5TileId: randomIdArr[4],
            pos6TileId: randomIdArr[5],
            pos7TileId: randomIdArr[6],
            pos8TileId: randomIdArr[7],
            pos9TileId: randomIdArr[8],

         })

         console.log(this.state.pos1TileId)
         return randomIdArr;
        //console.log('this.state.tileIdArr: '+this.state.tileIdArr)
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
                <ImageTile handleTileClick={this.onClick} posId={1} tileId={this.state.pos1TileId}/>
                <ImageTile handleTileClick={this.onClick} posId={2} tileId={this.state.pos2TileId}/>
                <ImageTile handleTileClick={this.onClick} posId={3} tileId={this.state.pos3TileId}/>
            </div>
            <div className='row'>
                <ImageTile handleTileClick={this.onClick} posId={4} tileId={this.state.pos4TileId}/>
                <ImageTile handleTileClick={this.onClick} posId={5} tileId={this.state.pos5TileId}/>
                <ImageTile handleTileClick={this.onClick} posId={6} tileId={this.state.pos6TileId}/>
            </div>
            <div className='row'>
                <ImageTile handleTileClick={this.onClick} posId={7} tileId={this.state.pos7TileId}/>
                <ImageTile handleTileClick={this.onClick} posId={8} tileId={this.state.pos8TileId}/>
                <ImageTile handleTileClick={this.onClick} posId={9} tileId={this.state.pos9TileId}/>
            </div>
        </div>

        

        </div>
        )
    }

}

export default GameInstance;