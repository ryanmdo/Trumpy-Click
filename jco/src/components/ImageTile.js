import React, {Component} from 'react';


class ImageTile extends Component{
    
    constructor(props){
    super(props);
    this.state={
            imgSrc:"./img/t4.png"
        };
    }

    render(){
        return(
            
                <img src={this.state.imgSrc} className="rounded" alt="..."/>
        )
    };

}

export default ImageTile;
