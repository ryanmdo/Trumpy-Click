import React, {Component} from 'react';


class ImageTile extends Component{
    
    constructor(props){
    super(props);
    this.state={

            srcArr:{
                t1:"https://s.abcnews.com/images/Politics/trump-budget-01-as-180119_3x2_992.jpg",
                t2:"https://upload.wikimedia.org/wikipedia/commons/3/34/Trump_cropped.jpg",
            },

            tSrc:""

        };

    }

    componentDidMount(){

        
        console.log(this.props.tileId)
        if(this.props.tileId===1){
            this.setState({
                tSrc:this.state.srcArr.t1
            })
            return;
        } else if (this.props.tileId===2){
            this.setState({
                tSrc:this.state.srcArr.t2
            })
            return;
        } else if (this.props.tileId===3){
            this.setState({
                tSrc:this.state.srcArr.t3
            })
            return;
        }

        console.log('ImageTile mounted')
    }

    render(){
        return (
            <div className='col-xs-2'>
                <span value={this.state.tileId}>
                    {this.props.tileId}
                </span>
                <img src={this.state.tSrc} className="img-responsive"  alt="Trump1"/>
            </div>
        )
    };

}

export default ImageTile;
