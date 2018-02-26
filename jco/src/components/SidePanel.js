import React, {Component} from 'react';



export default class SidePanel extends Component{
    constructor(props){
        super(props)
        this.state={
            winCount:0,

        }
    }



    render(){
        return(
            <div className='well well-lg'>
                <div className='panel-body'>
                    <p>Just click once, and only once, on each image.</p>
                    <p>Click on all 9 Donald Trump images to win.</p>
                    <p>Images randomly swap positions after each click.</p>

                    <div className='jumbotron'>
                    <h1>SCORE:{this.state.winCount}</h1>
                    </div>

                </div>
            </div>
        )
    }
}