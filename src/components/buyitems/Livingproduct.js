import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Buy.css';
import ShareIcons from './ShareIcons';

const productPic = {

  objectFit: "cover",
  width: "100%",
  maxHeight: "100%",
  marginLeft: '10px',
  marginTop: '60px',
  borderRadius: "8px",

}
const description ={
  marginTop: '60px',
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
const Livingproduct = () => {
  const [size, setSize] = useState('');
  const values = useLocation();
  const [share, setShare] = useState(false);

  useEffect(() => { 
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])
  const ShareMedia = () => {
    setShare(true);
  }
  const CloseShareMedia = () => {
    setShare(false);
  }
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4">
            <img style={productPic} src={values.state.img} className='img' />
            <div className='btncb'>
              <nav>
              <NavLink to="#"><button className='btnCard'>add to Card</button></NavLink>
                <NavLink to="buyform"><button className='btnBuy' >buy Now</button></NavLink>

                <Outlet />
              </nav>

            </div>
          </div>
          <div class="col-sm-8" style={description}>
            <h4>{values.state.Title}</h4>
            <p>{values.state.description}</p>
            <div style={gridContainer}>
              <div style={gridTtem1}><strong>₹{values.state.price.toLocaleString()}</strong></div>
              <div style={gridTtem2}> <del>₹{values.state.oldPrice.toLocaleString()}</del></div>
              <div style={gridTtem3}> <strong>{`${values.state.offer}`}%Off</strong></div>
            </div>
            <div style={gridContainer}>
              <div style={ratingStyle}>
                <h6 style={{ color: 'white', marginLeft: '10px', }}>{values.state.rating}<i class="fa-solid fa-star  fa-xs" style={{ color: "white", marginLeft: '4px', marginTop: '10px', position: 'absolute' }}></i></h6>
              </div>
              <div onClick={() => ShareMedia()} style={gridTtem4}><i class="fa-solid fa-share fa-xl" style={{ color: '#dbdbdb' }}><span style={{ color: 'black', }}></span></i>Share</div>
            </div>
            {share ?
              <div  onClick={() => CloseShareMedia()}><ShareIcons /></div> : null
               
            }
            <hr />
            <h2>Product Offer</h2>
            <ul className='Offer'>
              <li> <i class="fa-solid fa-tag" style={{color: "#008a09"}}></i><bold>Special PriceGet</bold> extra 19% off (price inclusive of cashback/coupon)T&C</li>
              <li><i class="fa-solid fa-tag" style={{color: "#008a09"}}></i>Bank OfferExtra ₹500 off on HDFC Bank Credit EMI Transactions on Net Cart Value of ₹29,999 and aboveT&C</li>
              <li><i class="fa-solid fa-tag" style={{color: "#008a09"}}></i>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
              <li><i class="fa-solid fa-tag" style={{color: "#008a09"}}></i>Buy for 50000 get ₹5000 off your Next BuyT&C</li>
            </ul>
            <hr />
            <h2>Product Details</h2>
            <ul>
              <li>100% Cotton</li>
              <li>Imported</li>
              <li> Button closure</li>
              <li> Machine Wash</li>
              <li>Same fit, new name: We’ve changed the name of this shirt style to “Regular Fit” but the measurements remain the same</li>
              <li>Crisp poplin fabric makes this long-sleeve button-up shirt a go-to pick for any occasion</li>
              <li> Patch chest pocket and rounded barrel cuffs</li>
              <li>Rear side pleats, rounded hem</li>
              <li>Work made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort</li>
              <li>Model is 6'2" and wearing size Medium</li>
            </ul>
            <hr />
            <p>Colour : {size} </p>
            <div className='btn' >
              <button onClick={() => { setSize('BROWN') }}>BROWN</button>
              <button onClick={() => { setSize('RED') }}>RED</button>
              <button onClick={() => { setSize('GRAY') }}>GRAY</button>
              <button onClick={() => { setSize('WHITE') }}>WHITE</button>
              <button onClick={() => { setSize('LIGHT GREEN') }}>LIGHT GREEN</button>
              <button onClick={() => { setSize('PINK') }}>PINK</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Livingproduct
