import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { mensShirtsset1, menShirts } from '../../constant/Const'
import './Buy.css';
import ShareIcons from './ShareIcons';
import Box from './Box';
import Review from './reviews/Review';

const productPic = {

    // objectFit: "cover",
    width: "30%",
    heigth: '60%',
    marginLeft: '10px',
    marginTop: '60px',
    borderRadius: "8px",
    overflow: "hidden",
    position: "fixed",


}
const description = {
    marginTop: '60px',
}
const selectionImg = {
    width: '100px',
    height: '80px',
    objectFit: "cover",

}
const selectionbtn = {
    color: 'white',
    border: 'none',
    padding: '20px',
    marginBottom: '10px',
    marginLeft: '10px',
}
const gridContainer = {
    display: 'grid',
    columnGap: '10px',
    gridTemplateColumns: 'auto auto auto',
    width: '150px',
}
const gridTtem1 = {
    padding: '1px',
    fontSize: '22px',
    textAlign: 'center',
}
const gridTtem2 = {
    padding: '1px',
    fontSize: '20px',
    textAlign: 'center',
    color: '#959595 ',
}
const gridTtem3 = {
    padding: '1px',
    fontSize: '15px',
    color: 'green',
    textAlign: 'center',
    marginTop: '4px',
}
const Size = {
    color: '#959595',
}
const ratingStyle = {
    backgroundColor: 'green',
    borderRadius: '30px',
    width: '53px',
    height: '23px',
}
const gridTtem4 = {
    padding: '1px',
    fontSize: '15px',
    textAlign: 'center',
    position: 'relative',
    marginLeft: '45em',
    cursor: 'pointer',
}


// const productDetails = {
//   border: '3px solid blue',
//   marginTop: '10px',

// }
const MobileDescription = () => {
    const [size, setSize] = useState('');
    const [image, setImage] = useState(true);
    const [share, setShare] = useState(false);
    const [imagepath, setImagepath] = useState(); // used for channge image path when user clink the images.
    const [imgcolor, setImgcolor] = useState();//display the image color in the form of text.
    const values = useLocation();
    let [mobile, setMobile] = useState(
        JSON.parse(localStorage.getItem("mobile")) || []
    );

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    const path = (items) => {
        setImage(false);
        setImagepath(items.image);
        setImgcolor(items.color);
    }
    const ShareMedia = () => {
        setShare(true);
    }
    const CloseShareMedia = () => {
        setShare(false);
    }
    // Whenever items change save to localStorage
    useEffect(() => {
        localStorage.setItem("mobile", JSON.stringify(mobile));
    }, [mobile]); //dependency is items
    // Add a new item
    const addToCart = (values) => {
        let Cart9 = mobile.some((e) => JSON.stringify(e.id) === JSON.stringify(values.id));
        if (!Cart9) {
            setMobile([...mobile, values]);
            setTimeout(() => {
                alert('items added successfully.');
            }, [1000])
        } else if (Cart9) {
            alert('items Already added successfully.');

        }
    }
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <img style={productPic} src={image ? values.state.img : imagepath} className='img' />

                    </div>
                    <div class="col-sm-8" style={description}>
                        <h4>{values.state.Title}</h4>
                        <h2>Product Description</h2>
                        <p>{values.state.description}</p>
                        <div style={gridContainer}>
                            <div style={gridTtem1}><strong>₹{values.state.price}</strong></div>
                            <div style={gridTtem2}> <del>₹{values.state.oldPrice}</del></div>
                            <div style={gridTtem3}> <strong>{`${values.state.offer}`}%Off</strong></div>
                        </div>
                        <div style={gridContainer}>
                            <div style={ratingStyle}>
                                <h6 style={{ color: 'white', marginLeft: '10px', }}>{values.state.rating}<i class="fa-solid fa-star  fa-xs" style={{ color: "white", marginLeft: '4px', marginTop: '10px', position: 'absolute' }}></i></h6>
                            </div>
                            <div onClick={() => ShareMedia()} style={gridTtem4}><i class="fa-solid fa-share fa-xl" style={{ color: '#dbdbdb' }}><span style={{ color: 'black', }}></span></i>Share</div>
                        </div>
                        {share ?
                            <div onClick={() => CloseShareMedia()}><ShareIcons /></div> : null
                        }
                        <hr />
                        <h2>Product Offer</h2>
                        <ul className='Offer'>
                            <li> <i class="fa-solid fa-tag" style={{ color: "#008a09" }}></i><bold>Special PriceGet</bold> extra 19% off (price inclusive of cashback/coupon)T&C</li>
                            <li><i class="fa-solid fa-tag" style={{ color: "#008a09" }}></i>Bank OfferExtra ₹500 off on HDFC Bank Credit EMI Transactions on Net Cart Value of ₹29,999 and aboveT&C</li>
                            <li><i class="fa-solid fa-tag" style={{ color: "#008a09" }}></i>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
                            <li><i class="fa-solid fa-tag" style={{ color: "#008a09" }}></i>Buy for 50000 get ₹5000 off your Next BuyT&C</li>
                        </ul>
                        <hr />
                        <h2>Warranty</h2>
                        <ul>
                            <li>
                                1 year warranty for device and 6months warranty for accessories</li>
                        </ul>
                        <h2>Product Details</h2>
                        <ul>
                            <li>32 MB RAM | 32 MB ROM</li>
                            <li>6.1 cm (2.4 inch) Display</li>
                            <li>0.8MP Rear Camera</li>
                            <li>2750 mAh Battery</li>
                        </ul>
                        <hr />
                        <p>Select color : <span style={{ fontWeight: "bold" }}>{imgcolor}</span></p>
                        <div className='row'>
                            <div class="col-sm-10">{

                                values.state.images.map((items, index) => (
                                    <>
                                        <button style={selectionbtn} onClick={() => { path(items, index) }} ><img key={index} img={items.color} src={items.image} style={selectionImg} /></button>

                                    </>
                                ))}
                                {/* {menShirts.filter(n => n.price> 700).map(filter=>(
            <img  src={filter.img}/>
          ))} */}
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h2>Specifications</h2>
                            <h4>General</h4>
                            <Box /><hr />
                            <h2>Review</h2>
                            <Review /> <br />
                        </div>
                        <hr />
                        <div className='btncb'>
                            <nav>
                                <button className='btnCard' onClick={() => addToCart(values.state)}>add to Cart</button>
                                <NavLink to="buyform"><button className='btnBuy' >buy Now</button></NavLink>
                                <Outlet />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MobileDescription
