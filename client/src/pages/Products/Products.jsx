import React, { useEffect, useState } from 'react';
import { Link,  useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from  "../../actions/cartAction";
import { addCategory } from "../../actions/productAction"
import { getFilteredproducts } from "../../selectors/productSelector"
import './Products.styles.css';

function Products(props){

    const {category} = useParams()
    const [topBarClicked,setTopBarClicked] = useState(false)

    useEffect(()=>{
        props.addCategory(category)
    },[category])
    return (
        <div id="products-page" className='products-container'>
            <div className='sidebar'>
                <div><Link className= "side-link" to="5b6899953d1a866534f516e2">Fruits &amp; Vegetables </Link></div>
                <div><Link className= "side-link" to="5b6899123d1a866534f516de">Bakery Cakes and Dairy</Link></div>
                <div><Link className='side-link' to="5b675e5e5936635728f9fc30">Beverages</Link></div>
                <div><Link className='side-link' to="5b68994e3d1a866534f516df">Beauty and Hygiene</Link></div>
                <div><Link className='side-link' to='5b6899683d1a866534f516e0'>Baby Care</Link></div>
                
            </div>
            <div className='topbar' onClick={()=>setTopBarClicked(!topBarClicked)}>
                <h3>Categories</h3>
                <div className={`${topBarClicked?'topbar-links':'topbar-links-hide'}`}>
                    <Link className= "side-link" to="5b6899953d1a866534f516e2">Fruits and Vegetables </Link>
                    <Link className= "side-link" to="5b6899123d1a866534f516de">Bakery Cakes and Dairy</Link>
                    <Link className='side-link' to="5b675e5e5936635728f9fc30">Beverages</Link>
                    <Link className='side-link' to="5b68994e3d1a866534f516df">Beauty and Hygiene</Link>
                    <Link className='side-link' to='5b6899683d1a866534f516e0'>Baby Care</Link>
                </div>
            </div>

            <div className='content'>
                {props.products? props.products.map((item)=>{
                    return (
                        <div className='custom-card' key={item.id}>
                            <h3 className='card-title'>{item.name}</h3>
                            <div className='card-img-container'>
                                <img src={item.imageURL}/>
                            </div>
                            <div className='card-description'>
                                <p>{item.description}</p>
                            </div>
                            <div className='custom-card-footer'>
                                <p>MRP Rs.{item.price}</p>
                                <button onClick={()=>props.addToCart(item)}>Buy</button>
                            </div>
                            <div className='custom-card-footer-responsive'>
                                <button onClick={()=>props.addToCart(item)}>Buy @ {item.price}</button>
                            </div>
                        </div>
                    )
                }) : ''}
                
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return{
        products: getFilteredproducts(state.productsReducer)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return({
        addToCart: (item)=> dispatch(addToCart(item)),
        addCategory: (category)=> dispatch(addCategory(category))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);