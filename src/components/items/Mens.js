import React, { useEffect, useState } from 'react'
import { menShirts, menHeading } from '../../constant/Const'
import { useNavigate } from 'react-router-dom';
import '../cart/Cart';





const heading = {
  color: 'blue',
  textAlign: 'center',
  padding: "20px",
}
const image = {
  width: 'auto',
  height: "20vh",
  ObjectFit: 'contain',
  backgroundSize: 'cover'

}
const card = {
  height: '25em',
  textAlign: 'justify'
}
const btnCard = {
  marginLeft: '10px',
  borderRadius: '2px',
  backgroundColor: '	 #fffa00',
  border: 'none',
  textAlign: 'center'
}
const btnBuy = {

  backgroundColor: 'rgb(255,165,0)',
  borderRadius: '2px',
  border: 'none',
  marginLeft: '10px',
  textAlign: 'center'
}
const imageTitle = {
  color: 'rgb(0,139,139)'
}
const cost = {
  marginLeft: '50px',
  marginTop: '-45px',
  color: 'green'

}
const fullCard = {
  marginLeft: '10px',
  marginRight: '10px',
}
const gridContainer = {
  display: 'grid',
  columnGap: '2px',
  gridTemplateColumns: 'auto auto auto',
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
  fontSize: '20px',
  color: 'green',
  textAlign: 'center',
}
const Size = {
  color: '#959595',
}






function Mens() {
  const cartFromLocalstorage = JSON.parse(localStorage.getItem('cart'));
  const [position, setposition] = useState();
  const navigate = useNavigate();
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("mens")) || []
  );


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isLogedin = (values, index) => {

    if (localStorage.getItem('useName') === null) {
      navigate('/login', {})
    } else {
      navigate('/buy', { state: values });
      setposition(index);
    }
  }
  // var a = [1,2,3,4,5,6]
  // var b = 6;
  // for (let i = 0; i < a.length; i++) {
  //   if (b[0] != a[i]) {
  //     console.log('hi');
  //   }

  // }


  // Whenever items change save to localStorage
  useEffect(() => {
    localStorage.setItem("mens", JSON.stringify(items));
  }, [items]); //dependency is items
  // Add a new item
  const addToCart = (values) => {
    let Cart9 = items.some((e) => JSON.stringify(e.id) === JSON.stringify(values.id));
    if (!Cart9) {
      setItems([...items, values]);
      setTimeout(() => {
        alert('items added successfully.');
      }, [1000])
    } else if (Cart9) {
      alert('items Already added successfully.');

    }
  }


  // function cartItems (values){
  //   setCartItems(values);
  //   // console.log(values);
  //   // console.log(addcartItems);

  //   console.log(hanleAddProduct(values));
  // }

  return (
    <div style={fullCard} >
      {
        localStorage.getItem('searchValues') == '' ? <h3 style={heading}>{menHeading} </h3> : <h3 style={heading}>RELATED PRODUCT.. </h3>
      }
      {/* <input type='text' onChange={event => setSearchTerm(event.target.value)} /> */}
      <div class="row row-cols-1 row-cols-md-5 g-4">
        {
          menShirts.filter((values) => {
            if (localStorage.getItem('searchValues') == '') {
              return values;
            } else if (values.Title.toLowerCase().includes(localStorage.getItem('searchValues').toLowerCase())) {
              return values
            }
          }).map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <div style={gridContainer}>
                    <div style={gridTtem1}><strong>₹{values.price.toLocaleString()}</strong></div>
                    <div style={gridTtem2}> <del>₹{values.oldPrice.toLocaleString()}</del></div>
                    <div style={gridTtem3}> <strong>{`${values.offer}% off`}</strong></div>
                  </div>
                  <p> <span style={Size}><strong>Size :</strong></span> <span>{values.size}</span></p>
                  <button style={btnCard} onClick={() => addToCart(values)} >add to Cart</button>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
export default Mens;


