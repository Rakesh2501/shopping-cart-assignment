import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Home.styles.css'

import CarouselComponent from '../../components/Carousel/CarouselComponent';
import Banner from '../../components/Banner/Banner';
import Cart from '../../components/Cart/Cart';


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            categories:[]
        }
    }

    componentDidMount = () =>{
        

        fetch('http://localhost:5000/categories')
        .then((response)=>{
            return response.json()
        })
        .then((res)=>{
            this.setState({categories:res})
        })
        .catch((error)=>{
            console.log("Error : ",error)
        })
    }

    render(){

        return(
            
            <div id="home-page" className='home'>
                <CarouselComponent/>

                {this.state.categories.length >0? this.state.categories.map((item,i)=>{
                    return(
                        <Banner key={item.id} item={item} displayOrder={i}/>
                    )
                }) : ''}
                
            </div>
          
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
        userName:state.authReducer.userName
    }
}

export default connect(mapStateToProps,null)(Home);

