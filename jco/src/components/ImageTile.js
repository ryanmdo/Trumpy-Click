import React, {Component} from 'react';


class ImageTile extends Component{
    
        constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div className='col-md-2'>
                    <img src='./img/t1.png' alt='trump1' className='img-thumbnail'/>
                    <img src={this.state.pos} alt='trump1' className='img-thumbnail'/>
            </div>
        )
    }

}

export default ImageTile;
