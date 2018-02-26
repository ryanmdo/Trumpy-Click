import React, {Component} from 'react';


class ImageTile extends Component{
    
    constructor(props){
    super(props);
    this.state={

            srcArr:{
                t1:"https://s.abcnews.com/images/Politics/trump-budget-01-as-180119_3x2_992.jpg",
                t2:"http://www.msnbc.com/sites/msnbc/files/styles/ratio--3-2--770x513/public/trump_82641.jpg-4019f.jpg?itok=BC2vRG66",
                t3:"http://cdn.thefiscaltimes.com/cdn/farfuture/HHjIOK1p3J0gACXnva5jvVIeOk3hg0zNcr3TN7cIvOg/mtime:1437250329/sites/default/files/styles/article_hero/public/media/Donald%20Trump_1.jpg?itok=i9IzVqSb",
                t4:"https://static.politico.com/dims4/default/2f20989/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F92%2F6e%2F7c4c11ea41a19f0e1fe1a1582eba%2F160520-donald-trump-1-gty-1160.jpg",
                t5:"https://cdn.cnn.com/cnnnext/dam/assets/160419184334-donald-trump-release-tax-returns-cnnmoney-orig-00022605.jpg",
                t6:"https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/12/28/09/trump.jpg",
                t7:"http://www.slate.com/content/dam/slate/articles/news_and_politics/politics/2015/10/151007_POL_Donald-Trump-Free_Media.jpg.CROP.promo-xlarge2.jpg",
                t8:"https://www.mwcboard.com/uploads/monthly_2018_01/trump_small_hands.jpg.4bfaea8c8c8d000d82ef7be1dc98c93b.jpg",            
                t9:"https://i0.wp.com/mavricproject.princeton.edu/wp-content/uploads/sites/395/2016/10/trump_screaming.jpg?resize=672%2C372&ssl=1"
            },

            tSrc:"",
            tileId:this.props.tileId,
            posId:this.props.posId


        };

        this.handleClick=this.handleClick.bind(this);

    }



    componentDidMount(){

        //attach the proper image src accord to the passed-through tileId.
        
        //console.log(this.state)
        console.log('Image at pos:'+this.state.posId)
        if(this.props.tileId===1){
            this.setState({
                tSrc:this.state.srcArr.t1,
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
        } else if (this.props.tileId===4){
            this.setState({
                tSrc:this.state.srcArr.t4
            })
            return;
        } else if (this.props.tileId===5){
            this.setState({
                tSrc:this.state.srcArr.t5
            })
            return;
        } else if (this.props.tileId===6){
            this.setState({
                tSrc:this.state.srcArr.t6
            })
            return;
        } else if (this.props.tileId===7){
            this.setState({
                tSrc:this.state.srcArr.t7
            })
            return;
        } else if (this.props.tileId===8){
            this.setState({
                tSrc:this.state.srcArr.t8
            })
            return;
        } else if (this.props.tileId===9){
            this.setState({
                tSrc:this.state.srcArr.t9
            })
            return;
        } else {
            console.log('an invalid tileId has been passed through')
        }

        console.log('ImageTile mounted')
    }

    handleClick(e){
        console.log(this.state.tileId+' has been clicked.')
        //console.log(e)
    }

    render(){
        return (
            <div className='col-xs-4'>
                <span>{this.state.posId},{this.state.tileId}</span>
                <img onClick={this.handleClick} src={this.state.tSrc} className="img-circle" height='160' width='180' alt="Trump1"/>
            </div>
        )
    };

}

export default ImageTile;
