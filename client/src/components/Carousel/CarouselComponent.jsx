import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap'

import './Carousel.styles.css'

class CarouselComponent extends Component{
    constructor(){
        super()
        this.state={
            banners:[],
            index:0
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:5000/banners')
            .then((response)=>{
                return response.json()
            })
            .then((res)=>{
                this.setState({banners:res})
            })
    }
    
    handleSelect = (selectedIndex, e) => {
        this.setState({index:selectedIndex});
      };

    render(){

        return(
                <div className='carousel-container'>
                    <Carousel className='carousel' activeIndex={this.state.index} onSelect={this.handleSelect} variant="dark">
                        {this.state.banners? this.state.banners.map((offer)=>{return(
                            <Carousel.Item className='carousel-img' key={offer.id}>
                                <img className="d-block w-100 carousel-img'" src={offer.bannerImageUrl} alt={offer.bannerImageAlt}/>
                            </Carousel.Item>
                        )}) : ''}
                    </Carousel>
                </div>

        )
    }

}
export default CarouselComponent;